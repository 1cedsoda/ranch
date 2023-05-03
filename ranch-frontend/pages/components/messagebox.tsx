import React from 'react';
import classNames from 'classnames'
import styles from '../../styles/main.module.scss';
import Image from 'next/image'

export default function Messagebox()
{
    return (
        <div className={classNames(styles.messagebox)}>
            <textarea className={classNames(styles.textinput)} rows={1} placeholder='Send a message.'/>
            <Image src="/send.svg" alt="Ranch Logo" width={24} height={24}/>
        </div>
    )
}