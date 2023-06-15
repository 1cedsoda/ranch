import { useSelector } from "react-redux";
import { selectAlpacaStore, streamPrompt, streamState } from "../stores/alpaca";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./chatbox.module.scss";
import { useRootDispatch } from "../stores/rootStore";
import { AlpacaState } from "ranch-proto/gen/alpaca_pb";
import { selectAuthStore } from "../stores/auth";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import EmptyTextarea from "./textarea";

export default function Chatbox() {
  const dispatch = useRootDispatch();
  const alpacaStore = useSelector(selectAlpacaStore);
  const initialState = useRef(true);
  const authStore = useSelector(selectAuthStore);
  const [containerHeight, setContainerHeight] = useState('auto');

  const [messages, setMessages] = useState(
    <div className={classNames(styles.messageDiv)}>
      <img
        src="/ranchLogo.jpg"
        alt="Ranch Logo"
        className={classNames(styles.chatboxLogo)}
      />
      <span className={classNames(styles.spanMessage)}>
        Hi {authStore.username}! How can I assist you today?
      </span>
    </div>
  );

  useEffect(() => {
    if (initialState.current) {
      initialState.current = false;
      document.addEventListener("keydown", function (event) {
        if (
          event.key === "Enter" &&
          document.activeElement?.id == "textarea"
        ) {
          sendMessage();
        }
      });
      dispatch(
        streamState({
          id: "test2",
        })
      );
      (
        document.getElementById("sendButton") as HTMLImageElement
      ).style.display = "none";
    }
  }, []);

  useEffect(() => {
    if (alpacaStore.state == AlpacaState.READY) {
      (
        document.getElementById("sendButton") as HTMLImageElement
      ).style.display = "block";
    } else {
      (
        document.getElementById("sendButton") as HTMLImageElement
      ).style.display = "none";
    }
    if (alpacaStore.promptResponse != undefined && alpacaStore.promptRunning) {
      const span = (
        (document.getElementById("chatbox") as HTMLDivElement)
          .lastElementChild as HTMLDivElement
      ).children[1] as HTMLSpanElement;
      console.log(span);
      span.innerHTML = alpacaStore.promptResponse;
      // console.log(alpacaStore.promptResponse);
    }
  }, [alpacaStore]);

  function handleStreamPrompt(alpacaPromptValue: string) {
    if (alpacaStore.state == AlpacaState.READY) {
      dispatch(
        streamPrompt({
          id: "test2",
          prompt: alpacaPromptValue,
        })
      );
    }
  }

  function sendMessage() {
    const message = (
      document.getElementById("textarea") as HTMLTextAreaElement
    ).value;
    console.log(message);
    const letter = authStore.username?.charAt(0).toUpperCase();
    setMessages(
      <>
        {messages}
        <div className={classNames(styles.messageDiv)}>
          <svg
            fill="#000000"
            width="2.5rem"
            height="2.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="1.25rem"></circle>
            <text x="15" y="25" fill="white">
              {letter}
            </text>
          </svg>
          <span className={classNames(styles.spanMessage)}>{message}</span>
        </div>
        {/* <div className={classNames(styles.messageDiv)}>
            <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.chatboxLogo)} />
            <span className={classNames(styles.spanMessage)}></span>
          </div> */}
      </>
    );
    (document.getElementById("textarea") as HTMLTextAreaElement).value = "";
    handleStreamPrompt(message);
  }

  return (
    <div className={classNames(styles.chatboxComponent)} id="chatboxComponent">
      {/* <Logo className={classNames(styles.logoBar)} h1Classname={classNames(styles.h1MainPage)} logoClassname={classNames(styles.logoMainPage)} id="logoBar"/> */}
      <div className={classNames(styles.chatbox)} id="chatbox">
        {messages}
      </div>
      <div className={classNames(styles.outerMessagebox)}>
        <div className={classNames(styles.messagebox)} style={{height: containerHeight}} id="messagebox">
          {/* <textarea
            className={classNames(styles.textinput)}
            rows={1}
            placeholder="Send a message."
            id="messageArea"
            onChange={handleChange}
            value={value}
          /> */}
          <EmptyTextarea />
          <img
            src="/send.svg"
            alt="Send Logo"
            className={classNames(styles.messageboxIcon)}
            onClick={() => sendMessage()}
            id="sendButton"
          />
        </div>
      </div>
    </div>
  );
}




