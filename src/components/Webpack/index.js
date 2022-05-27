import React from 'react';

import webpackImage from "./webpack.png";
import styles from "./styles.module.css";
import CircularIndeterminate from "../CircularIndeterminate";

const Webpack = () => {
    return (
        <div>
            <CircularIndeterminate/>
            <img className={styles.img} alt="webpack image" src={webpackImage}/>
            <input className={styles.input} type='text'/>
            <button>test</button>
        </div>
    );
};

export default Webpack;