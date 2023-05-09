
import type { NextPage } from 'next';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Logo from './components/logo';
import Chatbox from './components/chatbox';
import Sidebar from './components/sidebar';

function changeToMainPage(setPageStyle : Dispatch<SetStateAction<string>>, setContent : Dispatch<SetStateAction<JSX.Element>>)
{
    setContent(
        <>
            <Sidebar/>
            <Chatbox/>
            <div></div>
        </>
    );
    setPageStyle(classNames(styles.mainPage));
}

const landingPage: NextPage = () => {

    const [pageStyle, setPageStyle] = useState(classNames(styles.landingPage));
    const [content, setContent] = useState(
        <div>
            <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
            <div className={classNames(styles.goButtonContainer)} id='goButtonContainer'>
                <button className={classNames(styles.goButton)} onClick={() => changeToMainPage(setPageStyle, setContent)}>Go</button>
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

