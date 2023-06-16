import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Logo from '../components/logo';
import { useRouter } from 'next/router';
import { selectAuthStore } from '../stores/auth';

const landingPage: NextPage = () => {
    
    const authStore = useSelector(selectAuthStore);
    const router = useRouter();

    useEffect(() => {
        if (!authStore.token)
        {
            router.push('./login');
        }
    }, []);

    return (
        <div>
            <div className={classNames(styles.landingPage)}>
                <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
                <div className={classNames(styles.goButtonContainer)} id='goButtonContainer'>
                    <button className={classNames(styles.goButton)} onClick={() => router.push('./chat')}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default landingPage