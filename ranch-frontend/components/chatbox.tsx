import { useDispatch, useSelector } from 'react-redux';
import { AlpacaStoreState, getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import React, { Dispatch, MutableRefObject, SetStateAction, use, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './chatbox.module.scss';
import { Stream } from 'stream';
import { RootThunkDispatch, useRootDispatch } from '../stores/rootStore';
import { AlpacaState } from 'ranch-proto/gen/alpaca_pb';
import { selectAuthStore } from '../stores/auth';
import { addMessage, createChat, selectChatStore } from '../stores/chat';
import { MessageSender } from 'ranch-proto/gen/chat_pb';

export default function Chatbox()
{
    const dispatch = useRootDispatch();
    const alpacaStore = useSelector(selectAlpacaStore);
    const authStore = useSelector(selectAuthStore);
    const chatStore = useSelector(selectChatStore);
    const responseFinished = useRef(false);
    const [username, setUsername] = useState<string>('')

    useEffect(()=>{
          dispatch(streamState({
              id: authStore.userId + '_prompt',
            }));
          (document.getElementById('sendButton') as HTMLImageElement).style.display = 'none';
          setUsername(authStore.username as string);
        }
    , []);

    useEffect(()=>{
      if (alpacaStore.state == AlpacaState.READY)
      {
        (document.getElementById('sendButton') as HTMLImageElement).style.display = 'block';
      }
      else
      {
        (document.getElementById('sendButton') as HTMLImageElement).style.display = 'none';
      }
      if (alpacaStore.promptResponse != undefined && alpacaStore.state == AlpacaState.READY && alpacaStore.promptRunning === false)
      {
        if (!responseFinished.current)
        {
          responseFinished.current = true;
          dispatch(addMessage({
            chatId: sessionStorage.getItem('currentChatId') || '',
            text: alpacaStore.promptResponse,
            sender: MessageSender.BOT
          }));
        }
      }
      else
      {
        responseFinished.current = false;
      }
    }, [alpacaStore]);

    function handleStreamPrompt(alpacaPromptValue : string) {
        if (alpacaStore.state == AlpacaState.READY)
        {
          dispatch(addMessage({
            chatId: sessionStorage.getItem('currentChatId') || '',
            text: alpacaPromptValue,
            sender: MessageSender.USER
          }));
          dispatch(streamPrompt({
            id: authStore.userId + '_prompt',
            prompt: alpacaPromptValue,
          }));
        }
    }

    function sendMessage() {
      const message = (document.getElementById('messageArea') as HTMLTextAreaElement).value;
      // console.log(message); 
      // const letter = authStore.username?.charAt(0).toUpperCase();
      // messages.current = (
      //   <>
      //     {messages.current}
      //     <div className={classNames(styles.messageDiv)}>
      //       <svg fill="#000000" width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg">
      //         <circle cx="20" cy="20" r="1.25rem"></circle>
      //         <text x="15" y="25" fill="white">{letter}</text>
      //       </svg>
      //       <span className={classNames(styles.spanMessage)}>{message}</span>
      //     </div>
      //     <div className={classNames(styles.messageDiv)}>
      //       <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)} />
      //       <span className={classNames(styles.spanMessage)}></span>
      //     </div>
      //   </>
      // );
      (document.getElementById('messageArea') as HTMLTextAreaElement).value = '';
      handleStreamPrompt(message);
    }

    function changeSize()
    {
      const messageArea = (document.getElementById('messageArea') as HTMLTextAreaElement);
      const heightBefore = parseInt(messageArea.style.height.split('px')[0]);
      messageArea.style.height = '0';
      messageArea.style.height = (messageArea.scrollHeight - 26) + "px";
      if (parseInt(messageArea.style.height.split('px')[0]) > 120)
      {
        messageArea.style.height = heightBefore + 'px';
      }
    }

    return (
      <div className={classNames(styles.chatboxComponent)} id="chatboxComponent">
          <div className={classNames(styles.logoBar)}>
            <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.logoMainPage)} id='mainLogo'/>
            <h1 className={classNames(styles.h1MainPage)} id='h1'>Ranch</h1>
          </div>
          <div className={classNames(styles.chatbox)} id="chatbox">
              <div className={classNames(styles.messageDiv)}>
                  <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)} />
                  <span className={classNames(styles.spanMessage)}>Hi {username}! How can I help you today?</span>
                </div>
              {chatStore.messages.map((MessageEz, index) => {
                if (index == 0 || index % 2 == 0) //quick fix cause MessageSender does not work
                {
                  return (
                    <div className={classNames(styles.messageDiv)} id={MessageEz.id}>
                      <svg fill="#6da1ef" width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="1.25rem"></circle>
                        <text x="15" y="25" fill="white">{authStore.username?.charAt(0).toUpperCase()}</text>
                      </svg>
                      <span className={classNames(styles.spanMessage)}>{MessageEz.text}</span>
                    </div>
                  )
                }
                else
                {
                  return (
                    <div className={classNames(styles.messageDiv)}>
                      <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)} />
                      <span className={classNames(styles.spanMessage)}>{MessageEz.text}</span>
                    </div>
                  )
                }
                // if (MessageEz.sender === MessageSender.USER)
                // {
                //   return (
                //     <div className={classNames(styles.messageDiv)} id={MessageEz.id}>
                //       <svg fill="#6da1ef" width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg">
                //         <circle cx="20" cy="20" r="1.25rem"></circle>
                //         <text x="15" y="25" fill="white">{authStore.username?.charAt(0).toUpperCase()}</text>
                //       </svg>
                //       <span className={classNames(styles.spanMessage)}>{MessageEz.text}</span>
                //     </div>
                //   )
                // }
                // else
                // {
                //   return (
                //     <div className={classNames(styles.messageDiv)}>
                //       <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)} />
                //       <span className={classNames(styles.spanMessage)}>{MessageEz.text}</span>
                //     </div>
                //   )
                // }
              })}
          </div>
          <div className={classNames(styles.outerMessagebox)}>
              <div className={classNames(styles.messagebox)} id="messagebox">
                  <textarea className={classNames(styles.textinput)} rows={1} placeholder='Send a message.' id="messageArea" onInput={changeSize}/>
                  <img src="/send.svg" alt="Send Logo" className={classNames(styles.messageboxIcon)} onClick={() => sendMessage()} id="sendButton"/>
              </div>
          </div>
      </div>
    )
}