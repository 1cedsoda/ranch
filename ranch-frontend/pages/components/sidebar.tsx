import React, { use, useRef, useState } from 'react';
import classNames from 'classnames'
import styles from '../../styles/main.module.scss';
import Image from 'next/image'

export default function Sidebar()
{
    const [sidebarComponents, setSidebarComponents] = useState<JSX.Element>();
    const counter = useRef(1);

    function addNewChat()
    {
        setSidebarComponents(
            <>
            <div className={classNames(styles.sidebarComponents)}>
                <p>Telllkmst</p>
                {/* <input type="text"/> */}
            </div>
            {sidebarComponents}
            </>
        );
        counter.current++;
    }

    return (
        <div className={classNames(styles.sidebar)} id='sidebar'>
            <div className={classNames(styles.sidebarElements)}>
                <button className={classNames(styles.newChatButton)} onClick={addNewChat}>New Chat</button>
                {sidebarComponents}
            </div>
        </div>
    )
}