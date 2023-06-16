import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';
import { addMessage, createChat, getChatMessages, getChats, initializeForUser, selectChatStore, setChatTitle, streamChats } from '../stores/chat';
import style from './grpc-test.module.scss';
import classNames from 'classnames';
import { MessageSender } from 'ranch-proto/gen/chat_pb';
import { login, logout, selectAuthStore } from '../stores/auth';

export const Page: NextPage = () => {
  const dispatch = useRootDispatch();
  const alpacaStore = useSelector(selectAlpacaStore);
  const chatStore = useSelector(selectChatStore);
  const authStore = useSelector(selectAuthStore);

  useEffect(() => {
    console.log(alpacaStore);
    console.log(chatStore)
  }, [alpacaStore, chatStore]);

  const alpacaIdRef = createRef<HTMLInputElement>();
  const [alpacaIdValue, setAlpacaIdValue] = useState("test");

  const alpacaPromptRef = createRef<HTMLInputElement>();
  const [alpacaPromptValue, setAlpacaPromptValue] = useState("100*100=");

  function handleStreamPrompt() {
    dispatch(streamPrompt({
      id: alpacaIdValue,
      prompt: alpacaPromptValue,
    }));
  }

  function handleGetState() {
    dispatch(getState({
      id: alpacaIdValue,
    }))
  }

  function handleStreamState() {
    dispatch(streamState({
      id: alpacaIdValue,
    }))
  }

  useEffect(() => {
    if (!authStore.userId) {
      return;
    }
    dispatch(initializeForUser({
      userId: authStore.userId,
    }))
    console.log(chatStore);
  }, []);

  const messageRef = createRef<HTMLInputElement>();
  const [messageValue, setMessageValue] = useState("myMessage");

  const titleRef = createRef<HTMLInputElement>();
  const [titleValue, setTitleValue] = useState("myTitle");

  function handleCreateChat() {
    if (!authStore.userId) {
      return;
    }
    dispatch(createChat({
      userId: authStore.userId,
    }))
  }

  // handleGetChats
  function handleGetChats() {
    if (!authStore.userId) {
      return;
    }
    dispatch(getChats({
      userId: authStore.userId,
    }))
  }

  // handleStreamChats
  function handleStreamChats() {
    if (!authStore.userId) {
      return;
    }
    dispatch(streamChats({
      userId: authStore.userId,
    }))
  }

  // handleGetChatMessages
  const handleGetChatMessages = useCallback(() => {
    if (chatStore.chats.length === 0) {
      return;
    }
    console.log(chatStore.chats);
    dispatch(getChatMessages({
      chatId: chatStore.chats[0].id,
    }))
  }, [chatStore.chats])

  // handleSetChatTitle
  const handleSetChatTitle = useCallback(() => {
    if (chatStore.chats.length === 0) {
      return;
    }
    dispatch(setChatTitle({
      chatId: chatStore.chats[0].id,
      title: titleValue,
    }))
  }, [chatStore.chats, titleValue])

  // handleAddMessage
  const handleAddMessage = useCallback(() => {
    if (chatStore.chats.length === 0) {
      return;
    }
    dispatch(addMessage({
      chatId: chatStore.chats[0].id,
      text: messageValue,
      sender: MessageSender.USER,
    }))
  }, [chatStore.chats, messageValue])

  const usernameRef = createRef<HTMLInputElement>();
  const [usernameValue, setUsernameValue] = useState("admin");

  const passwordRef = createRef<HTMLInputElement>();
  const [passwordValue, setPasswordValue] = useState("secret_password");

  const handleLogin = useCallback(() => {
    dispatch(login({
      username: usernameValue,
      password: passwordValue,
    }))
  }, [usernameValue, passwordValue])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <>
      <h1>gRPC Test</h1>
      <div className={classNames(style.vertical)}>
        <h2>AlpacaService</h2>
        <div className={classNames(style.horizontal)}>
          <span>id</span>
          <input ref={alpacaIdRef} type='text' value={alpacaIdValue} onChange={(e) => setAlpacaIdValue(e.target.value)}/>
        </div>
        <div className={classNames(style.horizontal)}>
          <span>prompt</span>
          <input ref={alpacaPromptRef} type='text' value={alpacaPromptValue} onChange={(e) => setAlpacaPromptValue(e.target.value)}/>
        </div>
        <button onClick={handleStreamPrompt}>
          streamPrompt
        </button>
        <button onClick={handleGetState}>
          getState
        </button>
        <button onClick={handleStreamState}>
          streamState
        </button>
        <textarea value={JSON.stringify(alpacaStore)}>
        </textarea>
      </div>
      <div className={classNames(style.vertical)}>
        <h2>ChatService</h2>
        <div className={classNames(style.horizontal)}>
          <span>message</span>
          <input ref={messageRef} type='text' value={messageValue} onChange={(e) => setMessageValue(e.target.value)}/>
        </div>
        <div className={classNames(style.horizontal)}>
          <span>title</span>
          <input ref={titleRef} type='text' value={titleValue} onChange={(e) => setTitleValue(e.target.value)}/>
        </div>
        <button onClick={handleCreateChat}>
          createChat
        </button>
        <button onClick={handleGetChats}>
          getChats
        </button>
        <button onClick={handleStreamChats}>
          streamChats
        </button>
        <button onClick={handleGetChatMessages}>
          getChatMessages
        </button>
        <button onClick={handleSetChatTitle}>
          setChatTitle
        </button>
        <button onClick={handleAddMessage}>
          addMessage
        </button>
        <textarea value={JSON.stringify(chatStore)}>

        </textarea>
      </div>
      <div className={classNames(style.vertical)}>
        <h2>AuthService</h2>
        <div className={classNames(style.horizontal)}>
          <span>username</span>
          <input ref={usernameRef} type='text' value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)}/>
        </div>
        <div className={classNames(style.horizontal)}>
          <span>password</span>
          <input ref={passwordRef} type='text' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>
        </div>
        <button onClick={handleLogin}>
          login
        </button>
        <button onClick={handleLogout}>
          logout
        </button>
        <textarea value={JSON.stringify(authStore)}>
        </textarea>

      </div>

    </>
  );
};

export default Page;
