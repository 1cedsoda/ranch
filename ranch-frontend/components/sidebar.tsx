import { useDispatch, useSelector } from "react-redux";
import {
  getState,
  selectAlpacaStore,
  streamPrompt,
  streamState,
} from "../stores/alpaca";
import React, { use, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import { Stream } from "stream";
import { useRootDispatch } from "../stores/rootStore";
import { selectAuthStore } from "../stores/auth";
import {
  addMessage,
  createChat,
  getChatMessages,
  getChats,
  initializeForUser,
  selectChatStore,
  setChatTitle,
  streamChats,
} from "../stores/chat";

export default function Sidebar() {
  const authStore = useSelector(selectAuthStore);
  const dispatch = useRootDispatch();
  const chatStore = useSelector(selectChatStore);

  const initialState = useRef(true);
  const [sidebarComponents, setSidebarComponents] = useState<JSX.Element>();
  const [counter, setCounter] = useState(1);
  const counterNr = useRef(1);

  useEffect(() => {
    if (initialState.current) {
      initialState.current = false;
      dispatch(
        getChats({
          userId: localStorage.getItem("ranch_userId") as string,
        })
      );
      // setTimeout(() => {console.log(chatStore)}, 2000);
    }
    // console.log('test');
  }, []);

  useEffect(() => {
    console.log(chatStore);
  }, [chatStore]);

  return (
    <div className={classNames(styles.sidebar)} id="sidebar">
      <div className={classNames(styles.sidebarElements)}>
        <div className={classNames(styles.sidebarComponents)}>
          <div className={classNames(styles.sidebarLogo)}>
            <img src="/ranchLogo.jpg" alt="Ranch Logo" />
          </div>
          <div className={classNames(styles.sidebarButton)}>
            <button className={classNames(styles.newChatButton)}>
              New Chat
            </button>
          </div>
          <div className={classNames(styles.userContainer)}>
            <img src="/user2.png" width="30px" height="30px" />
            <h1>{authStore.username}</h1>
          </div>
        </div>
        {chatStore.chats.map(() => {
          return (
            <div className={classNames(styles.sidebarComponents)}>
              <div className={classNames(styles.sidebarInnerComponents)}>
                <input
                  type="text"
                  className={classNames(styles.chatHistoryInput)}
                  defaultValue={"Chat"}
                  disabled
                />
                <img src="/edit.svg" width="20px" height="20px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
