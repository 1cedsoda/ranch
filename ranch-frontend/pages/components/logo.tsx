import React from 'react';
import classNames from 'classnames'
import styles from '../../styles/main.module.scss';
import Image from 'next/image'

function showSidebar()
{
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    sidebar.animate(
        {transform: ['translateX(-100%)', 'translateX(0)']},
        {duration: 500}
    );
    sidebar.style.transform = 'translateX(0)';
}

export default function Logo()
{
    return(
        <div className={classNames(styles.logoBar)} onClick={showSidebar}>
            <Image src="/ranchLogo.jpg" alt="Ranch Logo" width={72} height={72} className={classNames(styles.logo)}/>
            <h1 className={classNames(styles.h1)}>Ranch</h1>
        </div>
    )
}
