import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';


function Button() {
  const router = useRouter();
  // const navigate = useNavigate();

  // const navigateToIndex = () => {
  //   navigate('/index');
  // };

  return (
    <button className={classNames(styles.button)} onClick={() => router.push('/go')} >Start<div className={classNames(styles.hoverEffect)}><div></div></div></button>
  );
}

export default Button;