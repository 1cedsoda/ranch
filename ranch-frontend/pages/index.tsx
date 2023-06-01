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

function changeToMainPage(setPageStyle : Dispatch<SetStateAction<string>>, setContent : Dispatch<SetStateAction<JSX.Element>>, handleLoginChanged : (value: boolean) => void)
{
    setContent(
        <>
            <Sidebar/>
            <Chatbox handleLogin={handleLoginChanged}/>
        </>
    );
    setPageStyle(classNames(styles.mainPage));
}

const landingPage: NextPage = () => {
    
    const [login, setLogin] = useState(false);
    const handleLoginChanged = (value : boolean) => {
        setLogin(value);
    };
    const handleResize = useCallback(() => {
        try {
            const sidebar = document.getElementById('sidebar') as HTMLDivElement;
            if (window.innerWidth < 850 && login)
            {
                sidebar.style.width = '0rem';
            }
            else if(login)
            {
                // (document.getElementById('sidebar') as HTMLDivElement).style.width = '15rem';
                sidebar.style.width = '15rem';
                if (sidebar.style.transform != 'translateX(0)')
                {
                    sidebar.style.transform = 'translateX(0)';
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [login]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [handleResize]);

    useEffect(() => {
        const jsonToken = localStorage.getItem('ranch_token');
        if (jsonToken)
        {
            //TODO check if token is valid
        }
        else
        {
            window.location.href = './login';
        }
    }, []);


    const [pageStyle, setPageStyle] = useState(classNames(styles.landingPage));
    const [content, setContent] = useState(
        <div>
            <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
            <div className={classNames(styles.goButtonContainer)} id='goButtonContainer'>
                <button className={classNames(styles.goButton)} onClick={() => changeToMainPage(setPageStyle, setContent, handleLoginChanged)}>Go</button>
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

