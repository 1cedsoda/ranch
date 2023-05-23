import { useDispatch, useSelector } from 'react-redux';
import { AlpacaStoreState, getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Logo from './logo';
import { Stream } from 'stream';
import { RootThunkDispatch, useRootDispatch } from '../stores/rootStore';

var letter = '';

interface componentProps {
    handleLogin : ((value: boolean) => void);
}

function sendMessage(setMessages : Dispatch<SetStateAction<JSX.Element>>, messages : JSX.Element, handleLogin : ((value: boolean) => void), dispatch : RootThunkDispatch, alpacaStore : AlpacaStoreState)
{
    const message = (document.getElementById('messageArea') as HTMLTextAreaElement).value;
    if (message == '') return;
    const words = message.split(' ');
    if (words.length == 1 && letter == '')
    {
        handleLogin(true);
        letter = message.charAt(0).toUpperCase();
        if(window.innerWidth >= 850)
        {
            (document.getElementById('sidebar') as HTMLDivElement).style.width = '15rem';
            showSidebar();
        }
        setMessages(
            <>
            {messages}
            <div className={classNames(styles.messageDiv)}>
                <svg fill="#000000" width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="1.25rem"></circle>
                    <text x="15" y="25" fill="white">{letter}</text>
                </svg>
                <span className={classNames(styles.spanMessage)}>{message}</span>
            </div>
            <div className={classNames(styles.messageDiv)}>
                <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)}/>
                <span className={classNames(styles.spanMessage)}>Hi {message}! How can I assist you today?</span>
            </div>
            </>
        );
        (document.getElementById('messageArea') as HTMLTextAreaElement).value = '';
        return;
    }
    setMessages(
        <>
        {messages}
        <div className={classNames(styles.messageDiv)}>
            <svg fill="#000000" width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="1.25rem"></circle>
                <text x="15" y="25" fill="white">{letter}</text>
            </svg>
            <span className={classNames(styles.spanMessage)}>{message}</span>
        </div>
        </>
    );
    (document.getElementById('messageArea') as HTMLTextAreaElement).value = '';
    if (letter != '')
    {
        (document.getElementById('sendButton') as HTMLImageElement).style.display = 'none';
        dispatch(streamPrompt({
            id: "message",
            prompt: message
      }));
        // const interval = setInterval(() => {
        //     console.log(alpacaStore);
        // }, 200);
    }

}

function showSidebar()
{
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    sidebar.animate(
        {transform: ['translateX(-100%)', 'translateX(0)']},
        {duration: 500}
    );
    sidebar.style.transform = 'translateX(0)';
}

export default function Chatbox(props : componentProps)
{
    const dispatch = useRootDispatch();
    const alpacaStore = useSelector(selectAlpacaStore);
    
    const [messages, setMessages] = useState(
        <div className={classNames(styles.messageDiv)}>
            <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)}/>
            <span className={classNames(styles.spanMessage)}>What is your alias?</span>
        </div>
    )

    useEffect(()=>{
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && document.activeElement?.id == 'messageArea')
            {
                sendMessage(setMessages, messages, props.handleLogin, dispatch, alpacaStore);
            }
        });
        const chatbox = document.getElementById("chatbox") as HTMLDivElement;
        chatbox.style.maxHeight = chatbox.offsetHeight + 'px';
    }, [])

    return (
        <div className={classNames(styles.chatboxComponent)}>
            <Logo className={classNames(styles.logoBar)} h1Classname={classNames(styles.h1MainPage)} logoClassname={classNames(styles.logoMainPage)}/>
            <div className={classNames(styles.chatbox)} id="chatbox">
                {messages}
            </div>
            <div className={classNames(styles.messagebox)} id="messagebox">
                <textarea className={classNames(styles.textinput)} rows={1} placeholder='Send a message.' id="messageArea"/>
                <img src="/send.svg" alt="Send Logo" className={classNames(styles.messageboxIcon)} onClick={() => sendMessage(setMessages, messages, props.handleLogin, dispatch, alpacaStore)} id="sendButton"/>
            </div>
        </div>
    )
}