import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Chatbox from '../components/chatbox';
import Sidebar from '../components/sidebar';
import { useRouter } from 'next/router';
import { selectAuthStore } from '../stores/auth';
import Button from '../components/button';

const landingPage: NextPage = () => {
    
    const router = useRouter();
    const authState = useSelector(selectAuthStore);
    
    useEffect(() => {
        if (!authState.token) {
            router.push('/login');
        }
    }, [authState]);

    return (
        <div>
        {/* <video className='test' src="test.mov" autoPlay loop muted /> */}
          {/* <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap');
          </style> */}
          <div className={classNames(styles.main)}>
            <div className={classNames(styles.logoContainer)}>
              <div className={classNames(styles.logo)}>
                <img src="/ranchLogo.jpg" alt="Ranch Logo" />
              </div>
              <div className={classNames(styles.title)}>
                  <h1>Ranch</h1>
              </div>
            </div>
          </div>
          <div className={classNames(styles.buttonContainer)}>
            <Button />
          </div>
      </div>
    )
}

export default landingPage

