import React from 'react';
import styles from "./Car.module.scss";

const Car = ({link, img, name, cost: {from, to}}) => {
    return (
        <div className={styles.root}>
            <a href={link}>
                <img
                    alt='car'
                    src={img}
                    width="140px"
                />
            </a>
            <a href={link}>
                <div className={styles.carName}>{name}</div>
            </a>
            <div className={styles.carCost}>від {from}$ до {to}$</div>
        </div>
    );
};

export default Car;