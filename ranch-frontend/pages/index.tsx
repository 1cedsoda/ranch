import type { NextPage } from 'next';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Logo from './components/logo';
import Chat from './components/chat';
import Sidebar from './components/sidebar';


const landingPage: NextPage = () => {

    const [pageStyle, setPageStyle] = useState(classNames(styles.landingPage));
    const [content, setContent] = useState<JSX.Element>();

    return (
        <div>
            <Sidebar/>
            <div className={pageStyle}>
                <div>
                    <Logo/>
                    <div className={classNames(styles.goButtonContainer)}>
                    <button onClick={() =>{
                        setPageStyle(classNames(styles.loginPage));
                        setContent(<Chat/>);
                        (document.getElementById('goButton') as HTMLElement).style.display = 'none';
                    }} 
                    className={classNames(styles.goButton)} id='goButton'>Go</button>
                </div>
            </div>
                {content}
            </div>
        </div>
    )
}

export default landingPage