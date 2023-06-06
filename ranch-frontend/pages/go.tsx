import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import type { NextPage } from 'next';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Logo from '../components/logo';
import Chatbox from '../components/chatbox';
import Sidebar from '../components/sidebar';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';
import { useRouter } from 'next/router';

function changeToMainPage(setPageStyle : Dispatch<SetStateAction<string>>, setContent : Dispatch<SetStateAction<JSX.Element>>, setChatPage : Dispatch<SetStateAction<boolean>>)
{
    setChatPage(true);
    setContent(
        <>
            <Sidebar/>
            <Chatbox />
        </>
    );
    setPageStyle(classNames(styles.mainPage));
}

const landingPage: NextPage = () => {
    
    const router = useRouter();
    const [chatPage, setChatPage] = useState<boolean>(false);
    const handleResize = useCallback(() => {
        try {
            const sidebar = document.getElementById('sidebar') as HTMLDivElement;
            if (window.innerWidth < 850 && chatPage)
            {
                sidebar.style.width = '0rem';
            }
            else if(chatPage)
            {
                sidebar.style.width = '15rem';
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [chatPage]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [handleResize]);

    useEffect(() => {
        const jsonToken = localStorage.getItem('ranch_token');
        const userId = localStorage.getItem('ranch_userId');
        const username = localStorage.getItem('ranch_username');
        if (jsonToken && userId && username)
        {
            //TODO check if token is valid
        }
        else
        {
            router.push('./login');
        }
    }, []);


    const [pageStyle, setPageStyle] = useState(classNames(styles.landingPage));
    const [content, setContent] = useState(
        <div>
            <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
            <div className={classNames(styles.goButtonContainer)} id='goButtonContainer'>
                <button className={classNames(styles.goButton)} onClick={() => changeToMainPage(setPageStyle, setContent, setChatPage)}>Go</button>
            </div>
        </div>
    );

    return (
        <div>
            <div className={pageStyle}>
                {content}
            </div>
        </div>
    )
}

export default landingPage

