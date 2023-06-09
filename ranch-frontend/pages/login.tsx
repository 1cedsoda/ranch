import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useRootDispatch } from '../stores/rootStore';
import { createGlobalStyle } from 'styled-components';
import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import { login,  selectAuthStore } from '../stores/auth';
import { useRouter } from 'next/router';

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
    const handleLogin = useCallback((usernameValue: string, passwordValue: string) => {
        dispatch(login({
            username: usernameValue,
            password: passwordValue,
        }))
    }, [])
    const { register: registerSignup, handleSubmit: handleSubmitSignup } = useForm({ shouldUseNativeValidation: true });
    const { register: registerSignIn, handleSubmit: handleSubmitSignIn } = useForm({ shouldUseNativeValidation: true });
    const signUpSubmit = async (data: any) => {
        handleLogin(data.username, data.password);
    };
    const signInSubmit = async (data: any) => {
        handleLogin(data.email_or_username, data.password);
    };

    useEffect(() => {
        if (authStore.userId != undefined) {
            localStorage.setItem('ranch_token', authStore.token as string);
            localStorage.setItem('ranch_username', authStore.username as string);
            localStorage.setItem('ranch_userId', authStore.userId as string);
            router.push('./');
        }
    }, [authStore]);

    const hasLetter = (value: string) => { if (!/[A-Za-z]/.test(value)) return 'Letter required!' };
    const hasNumber = (value: string) => { if (!/[0-9]/.test(value)) return 'Number required!' };
    const hasSpecialChar = (value: string) => { if (!/[!@#$%^&*]/.test(value)) return 'Special character required!' };
    const validatePassword = () => {
        const passwords = document.getElementsByClassName('password') as HTMLCollectionOf<HTMLInputElement>;
        if (passwords[0].value != passwords[1].value) {
            return 'Passwords do not match!';
        }
    };

    return (
        <div>
            <div className={styles.container} id="container">
                <div className={classNames(styles.form_container, styles.sign_up_container)}>
                    <form id="sign_up_form" onSubmit={handleSubmitSignup(signUpSubmit)}>
                        <div className={styles.container_div}>
                            <div>
                                <h1>Sign up</h1>
                            </div>
                            <div className={styles.innerContent}>
                                <input type="text" placeholder="Username" {...registerSignup("username", { required: "Please enter your username!" })} />
                                {/* <input type="email" placeholder="Email" {...registerSignup("email", {required: "Please enter your email!"})}/> */}
                                <input className="password" type="password" placeholder="Password" {...registerSignup("password", {
                                    required: "Please enter your password!", minLength: { value: 8, message: 'The password must be at least 8 characters long!' }, maxLength: { value: 40, message: 'The password must be less than or equal to 40 characters!' }, validate: {
                                        hasLetter,
                                        hasNumber,
                                        hasSpecialChar
                                    }
                                })} />
                                <input className="password" type="password" placeholder="Confirm Password" {...registerSignup("confirm_password", {
                                    required: "Please enter your password again!", validate: {
                                        validatePassword
                                    }
                                })} />
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
                                <input type="text" placeholder="Email or Username" {...registerSignIn("email_or_username", { required: "Please enter your username!" })} />
                                <input type="password" placeholder="Password" {...registerSignIn("password", {
                                    required: "Please enter your password!", minLength: { value: 8, message: 'The password must be at least 8 characters long!' }, maxLength: { value: 40, message: 'The password must be less than or equal to 40 characters!' }, validate: {
                                        hasLetter,
                                        hasNumber,
                                        hasSpecialChar
                                    }
                                })} />
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