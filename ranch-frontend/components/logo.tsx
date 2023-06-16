import React, { CSSProperties } from 'react';

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
