import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import classNames from 'classnames'
import styles from './sidebar.module.scss';
import { useRootDispatch } from '../stores/rootStore';
import { createChat, getChatMessages, getChats, selectChatStore, setChatTitle } from '../stores/chat';
import { selectAuthStore } from '../stores/auth';

export default function Sidebar()
{
    const dispatch = useRootDispatch();
    const chatStore = useSelector(selectChatStore);
    const authStore = useSelector(selectAuthStore);

    useEffect(() => {
        if (sessionStorage.getItem('loadNewChat') == 'false')
        {
            dispatch(createChat({
                userId: authStore.userId as string,
              }))
            sessionStorage.setItem('loadNewChat', 'true');
        }
        dispatch(getChats({
            userId: authStore.userId as string,
        }));
    }, []);

    function loadChat(chatId: string) 
    {
        dispatch(getChatMessages({
            chatId: chatId,
        }));
    }

    function addChat()
    {
        dispatch(createChat({
            userId: authStore.userId as string,
        }));
    }

    function editChatTitle(inputId: string)
    {
        const input = document.getElementById(inputId) as HTMLInputElement;
        input.disabled = false;
        input.focus();
    }

    function changeChatTitle(inputId: string, chatId: string)
    {
        const input = document.getElementById(inputId) as HTMLInputElement;
        input.disabled = true;
        dispatch(setChatTitle({	
            chatId: chatId,
            title: input.value
        }));
    }

    return (
        <div className={classNames(styles.sidebar)} id='sidebar'>
            <div>
                <div className={classNames(styles.sidebarComponents)}>
                    <button className={classNames(styles.newChatButton)} onClick={() => addChat()}>New Chat</button>
                </div>
                <div className={classNames(styles.sidebarComponents)}>
                    <div className={classNames(styles.sidebarInnerComponents)} onClick={() => loadChat(chatStore.chats[0].id || '')}>
                        <input id='_input' type='text' className={classNames(styles.chatHistoryInput)} defaultValue={'New Chat'} disabled onBlur={() => changeChatTitle(chatStore.chats[0].id || '' + '_input', chatStore.chats[0].id || '')}/>
                        <img src='/edit.svg' width='20px' height='20px' onClick={() => editChatTitle(chatStore.chats[0].id || '' + '_input')}/>
                    </div>
                </div>
                {chatStore.chats.map((ChatObjectEz) => {
                    return (
                        <div className={classNames(styles.sidebarComponents)}>
                            <div className={classNames(styles.sidebarInnerComponents)} id={ChatObjectEz.id} onClick={() => loadChat(ChatObjectEz.id)}>
                                <input id={ChatObjectEz.id + '_input'} type='text' className={classNames(styles.chatHistoryInput)} defaultValue={ChatObjectEz.title as string} disabled onBlur={() => changeChatTitle(ChatObjectEz.id + '_input', ChatObjectEz.id)}/>
                                <img src='/edit.svg' width='20px' height='20px' onClick={() => editChatTitle(ChatObjectEz.id + '_input')}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}