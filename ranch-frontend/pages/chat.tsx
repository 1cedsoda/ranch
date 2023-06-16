import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './chat.module.scss';
import Chatbox from '../components/chatbox';
import Sidebar from '../components/sidebar';
import { useRouter } from 'next/router';
import { selectAuthStore } from '../stores/auth';

const landingPage: NextPage = () => {
    
    const router = useRouter();
    const authStore = useSelector(selectAuthStore);

    useEffect(() => {
        if (!authStore.token)
        {
            router.push('./login');
        }
    }, []);

    return (
        <div>
            <div className={classNames(styles.mainPage)}>
                <Sidebar/>
                <Chatbox />
            </div>
        </div>
    )
}

export default landingPage