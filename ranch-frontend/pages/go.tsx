<<<<<<< Updated upstream
import type { NextPage } from 'next';
=======
import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
>>>>>>> Stashed changes
import classNames from 'classnames';
import styles from './go.module.scss';
import Logo from '../components/logo';
import { useRouter } from 'next/router';
<<<<<<< Updated upstream

const goPage: NextPage = () => {
=======
import { selectAuthStore } from '../stores/auth';

const landingPage: NextPage = () => {
>>>>>>> Stashed changes
    
    const authStore = useSelector(selectAuthStore);
    const router = useRouter();

<<<<<<< Updated upstream
    return (
        <>
            <div className={classNames(styles.landingPage)}>
                <div>
                    <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
                    <div className={classNames(styles.goButtonContainer)}>
                        <button className={classNames(styles.goButton)} onClick={() => router.push("/") }>Go</button>
                    </div>
=======
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
                    <button className={classNames(styles.goButton)} onClick={() => router.push('./')}>Go</button>
>>>>>>> Stashed changes
                </div>
            </div>
        </>
    )
}

export default goPage

