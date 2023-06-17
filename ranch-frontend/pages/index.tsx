import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { selectAuthStore } from '../stores/auth';

const landingPage: NextPage = () => {
    
    const authStore = useSelector(selectAuthStore);
    const router = useRouter();

    useEffect(() => {
        sessionStorage.setItem('loadNewChat', 'false');
        if (!authStore.token)
        {
            router.push('./login');
        }
    }, []);

    return (
        <div>
            <div className={classNames(styles.landingPage)}>
                <div className={classNames(styles.logoBar)}>
                    <img src="/ranchLogo.jpg" alt="Ranch Logo" className={classNames(styles.logo)} id='mainLogo'/>
                    <h1 className={classNames(styles.h1)} id='h1'>Ranch</h1>
                </div>
                <div className={classNames(styles.goButtonContainer)} id='goButtonContainer'>
                    <button className={classNames(styles.goButton)} onClick={() => router.push('./chat')}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default landingPage