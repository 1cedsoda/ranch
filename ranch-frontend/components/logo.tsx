import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from '../styles/main.module.scss';
import Image from 'next/image';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';

interface componentProps {
    className? : string;
    style? : CSSProperties;
    id? : string;
    logoClassname? : string;
    h1Classname? : string;
}

export default function Logo(props : componentProps)
{
    return(
        <div className={props.className} style={props.style} id={props.id}>
            <img src="/ranchLogo.jpg" alt="Ranch Logo" className={props.logoClassname} id='mainLogo'/>
            <h1 className={props.h1Classname} id='h1'>Ranch</h1>
        </div>
    )
}
