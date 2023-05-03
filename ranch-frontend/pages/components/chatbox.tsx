import React, { useState } from 'react';
import classNames from 'classnames'
import styles from '../../styles/main.module.scss';
import Image from 'next/image'

// const [content, setContent] = useState<JSX.Element>();

function addMessage(message: string, author: string = 'anonymous') : JSX.Element
{
    var imageSrc = <Image src="/ranchLogo.jpg" alt="Ranch Logo" width={40} height={40} className={classNames(styles.logo)}/>;
    if (author == 'ranchBot')
    {

    }

    return (
        <div className={classNames(styles.messageDiv)}>
            {imageSrc}
            <span className={classNames(styles.spanMessage)}>{message}</span>
        </div>
    )
}

export default function Chatbox()
{
    const [chatbox, setChatbox] = useState<JSX.Element>(addMessage('What is your alias?'));
    // setChatbox(<>
    // {chatbox}
    // {addMessage('Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij Hier is some Tectoiejfoiwejfoijwefoij')}
    // </>)	
    return (
        <div className={classNames(styles.chatbox)}>
            {chatbox}
        </div>
    )
}