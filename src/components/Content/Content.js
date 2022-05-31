import React from 'react';
import Order from "Components/Order";
import styles from "./Content.module.scss";

const Content = () => {
    return (
        <main className={styles.root}>
            <Order/>
        </main>
    );
};

export default Content;