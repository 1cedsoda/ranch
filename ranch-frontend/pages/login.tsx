import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import type { NextPage } from 'next';
import React, { Dispatch, SetStateAction, use, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Logo from '../components/logo';
import Chatbox from '../components/chatbox';
import Sidebar from '../components/sidebar';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';
import { createGlobalStyle } from 'styled-components';
import styles from '../styles/login.module.scss';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
    font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
    font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
    color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #d41fb9;
	background-color: #d41fb9;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
    background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}
`;

function signIn_switch() {
    const container = document.getElementById('container') as HTMLDivElement;
    container.className = styles.container;
}

function signUp_switch() {
    const container = document.getElementById('container') as HTMLDivElement;
    const className = classNames(styles.container, styles.right_panel_active);
    container.className = className;
}

function signIn(){
    const form = document.getElementById('sign_in_form') as HTMLFormElement;
    const email_or_username = (form.elements.namedItem('email_or_username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const queryParams = `email_or_username=${encodeURIComponent(email_or_username)}&password=${encodeURIComponent(password)}`;
    //TODO: put request to put the user information in the database and get the user token and store it in the local storage
}

function signUp(){
    const form = document.getElementById('sign_up_form') as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const queryParams = `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    //TODO: get request to get the user token and store it in the local storage
}

export const Page: NextPage = () => {
    return (
        <div>
            <GlobalStyle />
        <div className={styles.container} id="container">
        <div className={classNames(styles.form_container, styles.sign_up_container)}>
            <form id="sign_up_form">
                <div className={styles.container_div}>
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <div className={styles.innerContent}>
                        <input type="text" placeholder="Username" name='username'/>
                        <input type="email" placeholder="Email" name='email'/>
                        <input type="password" placeholder="Password" name='username'/>
                    </div>
                    <div>
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
        <div className={classNames(styles.form_container, styles.sign_in_container)}>
            <form id="sign_in_form">
                <div className={styles.container_div}>
                    <div>
                        <h1>Sign in</h1>
                    </div>
                    <div className={styles.innerContent}>
                        <input type="text" placeholder="Email or Username" name='email_or_username'/>
                        <input type="password" placeholder="Password" name='password'/>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <div>
                        <button onClick={signIn}>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
        <div className={styles.overlay_container}>
            <div className={styles.overlay}>
                <div className={classNames(styles.overlay_panel, styles.overlay_left)}>
                    <div className={styles.container_div}>
                        <div>
                            <h1>Welcome Back!</h1>
                        </div>
                        <div className={styles.innerContent}>
                            <p>To use Ranch please login with your personal info</p>
                        </div>
                        <div>
                            <button className={styles.ghost} id="signIn" onClick={signIn_switch}>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.overlay_panel, styles.overlay_right)}>
                    <div className={styles.container_div}>
                        <div>
                            <h1>Welcome to Ranch!</h1>
                        </div>
                        <div className={styles.innerContent}>
                            <p>To get started enter your personal details</p>
                        </div>
                        <div>
                            <button className={styles.ghost} id="signUp" onClick={signUp_switch}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Page;