import React from 'react';
import Order from "Components/Content/Order";
import styles from "./Content.module.scss";
import Cars from "Components/Content/Cars";

const Content = () => {
    return (
        <main className={styles.root}>
            <Order/>
            <Cars/>
        </main>
    );
};

export default Content;