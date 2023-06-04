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
import { useForm } from 'react-hook-form';
import { login, logout, selectAuthStore } from '../stores/auth';
import { useRouter } from 'next/router';

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

export const Page: NextPage = () => {
    const router = useRouter();
    const dispatch = useRootDispatch();
    const authStore = useSelector(selectAuthStore);
    const handleLogin = useCallback((usernameValue : string, passwordValue : string) => {
        dispatch(login({
          username: usernameValue,
          password: passwordValue,
        }))
      }, [])
    const { register: registerSignup, handleSubmit: handleSubmitSignup} = useForm({ shouldUseNativeValidation: true });
    const { register: registerSignIn, handleSubmit: handleSubmitSignIn} = useForm({ shouldUseNativeValidation: true });
    const signUpSubmit = async (data : any) => {
        handleLogin(data.username, data.password);
      };
    const signInSubmit = async (data : any) => {
        handleLogin(data.email_or_username, data.password);
    }; 

    useEffect(() => {
        if (authStore.userId != undefined)
        {
            localStorage.setItem('ranch_token', authStore.token as string);
            localStorage.setItem('ranch_username', authStore.username as string);
            router.push('./');
        }
    }, [authStore]);

    const hasLetter = (value : string) => {if(!/[A-Za-z]/.test(value)) return 'Letter required!'};
    const hasNumber = (value : string) => {if(!/[0-9]/.test(value)) return 'Number required!'}; 
    const hasSpecialChar = (value : string) => {if(!/[!@#$%^&*]/.test(value)) return 'Special character required!'};

    return (
        <div>
            <GlobalStyle />
        <div className={styles.container} id="container">
        <div className={classNames(styles.form_container, styles.sign_up_container)}>
            <form id="sign_up_form" onSubmit={handleSubmitSignup(signUpSubmit)}>
                <div className={styles.container_div}>
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <div className={styles.innerContent}>
                        <input type="text" placeholder="Username" {...registerSignup("username", {required: "Please enter your username!"})}/>
                        <input type="email" placeholder="Email" {...registerSignup("email", {required: "Please enter your email!"})}/>
                        <input type="password" placeholder="Password" {...registerSignup("password", {required: "Please enter your password!",minLength: { value: 8, message: 'The password must be at least 8 characters long!' }, maxLength: {value: 40, message:'The password must be less than or equal to 40 characters!'}, validate: {
                            hasLetter,
                            hasNumber,
                            hasSpecialChar
                        }})}/>
                    </div>
                    <div>
                        <button type='submit'>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
        <div className={classNames(styles.form_container, styles.sign_in_container)}>
            <form id="sign_in_form" onSubmit={handleSubmitSignIn(signInSubmit)}>
                <div className={styles.container_div}>
                    <div>
                        <h1>Sign in</h1>
                    </div>
                    <div className={styles.innerContent}>
                        <input type="text" placeholder="Email or Username" {...registerSignIn("email_or_username", {required: "Please enter your email or username!"})}/>
                        <input type="password" placeholder="Password" {...registerSignIn("password", {required: "Please enter your password!", minLength: { value: 8, message: 'The password must be at least 8 characters long!' }, maxLength: {value: 40, message:'The password must be less than or equal to 40 characters!'}, validate: {
                            hasLetter,
                            hasNumber,
                            hasSpecialChar
                        }})}/>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <div>
                        <button type='submit'>Sign In</button>
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