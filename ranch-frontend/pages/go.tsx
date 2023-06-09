import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from '../styles/go.module.scss';
import Logo from '../components/logo';
import { useRouter } from 'next/router';

const goPage: NextPage = () => {
    
    const router = useRouter();

    return (
        <>
            <div className={classNames(styles.landingPage)}>
                <div>
                    <Logo className={classNames(styles.logoBar)} logoClassname={classNames(styles.logo)} h1Classname={classNames(styles.h1)}/>
                    <div className={classNames(styles.goButtonContainer)}>
                        <button className={classNames(styles.goButton)} onClick={() => router.push("/") }>Go</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default goPage

