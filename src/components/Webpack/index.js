import React from 'react';
import webpackImage from "./webpack.png";
import styles from "./styles.module.css";

const Webpack = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} alt="webpack image" src={webpackImage}/>
            <input className={styles.input} type='text'/>
        </div>
    );
};

export default Webpack;