import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
import {Routes, Route, useNavigate} from 'react-router-dom';


function Button() {
  // const navigate = useNavigate();

  // const navigateToIndex = () => {
  //   navigate('/index');
  // };

  return (
    <button className={classNames(styles.button)}>Start<div className={classNames(styles.hoverEffect)}><div></div></div></button>
  );
}

export default Button;