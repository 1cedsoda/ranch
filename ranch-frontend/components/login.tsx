import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Image from 'next/image';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';

export default function LogIn()
{
    return(
        <div className={classNames(styles.loginForm)}>

        </div>
    );
}