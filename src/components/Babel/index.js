import React from 'react';
import babelImage from "./babel.png";
import styles from "./styles.module.css";

const Babel = () => {
    return (
        <div>
            <img alt="babel image" src={babelImage}/>
            <button className={styles.error}>test</button>
        </div>
    );
};

export default Babel;