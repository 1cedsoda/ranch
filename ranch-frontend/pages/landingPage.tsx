import classNames from "classnames";
import styles from "./landingPage.module.scss";
import React from "react";
import Button from "../components/button";

const LandingPage = () => {
  return (
    <div>
      <video className='test' src="test.mov" autoPlay loop muted />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap');
        </style>
        <div className={classNames(styles.main)}>
          <div className={classNames(styles.logoContainer)}>
            <div className={classNames(styles.logo)}>
              <img src="/ranchLogo.jpg" alt="Ranch Logo" />
            </div>
            <div className={classNames(styles.title)}>
              <p>
                <h1>Ranch</h1>
              </p>
            </div>
          </div>
        </div>
        <div className={classNames(styles.buttonContainer)}>
          <Button />
        </div>
    </div>
  );
};

export default LandingPage;
