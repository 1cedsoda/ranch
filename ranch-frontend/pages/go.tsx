import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './go.module.scss';
import Logo from '../components/logo';
import { useRouter } from 'next/router';
import  Chatbox  from '../components/chatbox';
import Sidebar from '../components/sidebar';

const goPage: NextPage = () => {
    
    const router = useRouter();

    return (
        <div className={classNames(styles.mainPage)}>
        <Sidebar/>
        <Chatbox />
    </div>
    )
}

export default goPage

