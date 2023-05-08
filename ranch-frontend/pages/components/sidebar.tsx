import React from 'react';
import classNames from 'classnames'
import styles from '../../styles/main.module.scss';
import Image from 'next/image'

export default function Sidebar()
{
    return (
        <div className={classNames(styles.sidebar)} id='sidebar'>
            <div className={classNames(styles.sidebarElements)}>
                <button className={classNames(styles.newChatButton)}>New Chat</button>
            </div>
        </div>
    )
}