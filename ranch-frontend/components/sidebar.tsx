import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import React, { use, useRef, useState } from 'react';
import classNames from 'classnames'
import styles from '../styles/main.module.scss';
import Image from 'next/image'
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';

function setEnabled(counter : Number)
{
    console.log(counter);
    const input = document.getElementById('inputChatName' + counter) as HTMLInputElement;
    input.disabled = false;
    input.focus();
}

function setDisabled(counter : Number)
{
    console.log(counter);
    const input = document.getElementById('inputChatName' + counter) as HTMLInputElement;
    input.disabled = true;
}

export default function Sidebar()
{
    const [sidebarComponents, setSidebarComponents] = useState<JSX.Element>();
    const [counter, setCounter] = useState(1);
    const counterNr = useRef(1);

    function addNewChat()
    {
        console.log(counter);
        setSidebarComponents(
            <>
                <div className={classNames(styles.sidebarComponents)}>
                    <div className={classNames(styles.sidebarInnerComponents)}>
                        <input type='text' className={classNames(styles.chatHistoryInput)} defaultValue={counterNr.current + '. Chat'} id={'inputChatName' + counter} disabled onBlur={() => setDisabled(counter)}/>
                        <img src='/edit.svg' width='20px' height='20px' onClick={() => setEnabled(counter)}/>
                    </div>
                </div>
                {sidebarComponents}
            </>
        );
        counterNr.current++;
        setCounter(counter + 1);
    }

    return (
        <div className={classNames(styles.sidebar)} id='sidebar'>
            <div className={classNames(styles.sidebarElements)}>
                <div className={classNames(styles.sidebarComponents)}>
                    <button className={classNames(styles.newChatButton)} onClick={addNewChat}>New Chat</button>
                </div>
                {sidebarComponents}
            </div>
        </div>
    )
}