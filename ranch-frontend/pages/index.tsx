import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Chatbox from '../components/chatbox';
import Sidebar from '../components/sidebar';
import { useRouter } from 'next/router';
import { selectAuthStore } from '../stores/auth';

const mainChatPage: NextPage = () => {
    
    const router = useRouter();
    const authState = useSelector(selectAuthStore);
    
    useEffect(() => {
        if (!authState.token) {
            router.push('/login');
        }
    }, [authState]);

    return (
        <div className={classNames(styles.mainPage)}>
            <Sidebar/>
            <Chatbox />
        </div>
    )
}

export default mainChatPage

