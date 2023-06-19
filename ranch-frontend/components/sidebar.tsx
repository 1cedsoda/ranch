import { useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames'
import styles from './sidebar.module.scss';
import { useRootDispatch } from '../stores/rootStore';
import { createChat, getChatMessages, getChats, selectChatStore, setChatTitle, streamChats } from '../stores/chat';
import { logout, selectAuthStore } from '../stores/auth';
import { useRouter } from 'next/router';
import { ChatObjectEz } from 'ranch-proto/dist/pb';

export default function Sidebar()
{
    const dispatch = useRootDispatch();
    const chatStore = useSelector(selectChatStore);
    const authStore = useSelector(selectAuthStore);
    const router = useRouter();
    const chatsLength = useRef(0);
    const [userComponent, setUserComponent] = useState<JSX.Element>();

    useEffect(() => {
        if (sessionStorage.getItem('loadNewChat') == 'false')
        {
            addChat();
            sessionStorage.setItem('loadNewChat', 'true');
        }
        dispatch(getChats({
            userId: authStore.userId as string,
        }));
        setUserComponent(<div className={classNames(styles.usernameDiv)}>{authStore.username}</div>);
        // sessionStorage.setItem('currentChatId', chatStore.chats[chatStore.chats.length - 1] as unknown as string);
    }, []);

    useEffect(() => {
        if (chatStore.chats.length > chatsLength.current)
        {
            chatsLength.current = chatStore.chats.length;
            sessionStorage.setItem('currentChatId', chatStore.chats[chatStore.chats.length - 1].id);
        }
        console.log(chatStore.messages);
    }, [chatStore]);

    function loadChat(chatId: string) 
    {
        sessionStorage.setItem('currentChatId', chatId);
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
            <div className={classNames(styles.innerSidebar)}>
                <div>
                    <div className={classNames(styles.newChatComponent)}>
                        <button className={classNames(styles.newChatButton)} onClick={() => addChat()}>New Chat</button>
                    </div>
                </div>
                <div className={classNames(styles.chatComponents)}>
                    {/* <div className={classNames(styles.sidebarComponents)}>
                        <div className={classNames(styles.sidebarInnerComponents)} onClick={() => loadChat(chatStore.chats[0].id || '')}>
                            <input id='_input' type='text' className={classNames(styles.chatHistoryInput)} defaultValue={'New Chat'} disabled onBlur={() => changeChatTitle(chatStore.chats[0].id || '' + '_input', chatStore.chats[0].id || '')}/>
                            <img src='/edit.svg' width='20px' height='20px' onClick={() => editChatTitle(chatStore.chats[0].id || '' + '_input')}/>
                        </div>
                    </div> */}
                    {chatStore.chats.map((ChatObjectEz) => {
                        return (
                            <div className={classNames(styles.sidebarComponents)}>
                                <div className={classNames(styles.sidebarInnerComponents)} id={ChatObjectEz.id} onClick={() => loadChat(ChatObjectEz.id)}>
                                    <input id={ChatObjectEz.id + '_input'} type='text' className={classNames(styles.chatHistoryInput)} defaultValue={ChatObjectEz.title || 'Chat'} disabled onBlur={() => changeChatTitle(ChatObjectEz.id + '_input', ChatObjectEz.id)}/>
                                    <img src='/edit.svg' width='20px' height='20px' onClick={() => editChatTitle(ChatObjectEz.id + '_input')}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className = {classNames(styles.loginModule)}>
                        {userComponent}
                        {/* <div className={classNames(styles.usernameDiv)}>{authStore.username}</div> */}
                        <button className={classNames(styles.logOutButton)} onClick={() => {dispatch(logout()); router.push('./login')}}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}