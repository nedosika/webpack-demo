import React from 'react';
import styles from "./Chart.module.scss";

const Chart = ({number, description}) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <span className={styles.number}>{number}<span>%</span></span>
                <div className={styles.pie} style={{clip: `rect(${140 - number * 140 / 100}px, 140px, 140px, 0px)`}}/>
                <div className={styles.shadow}/>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Chart;