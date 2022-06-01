import React from 'react';
import Order from "Components/Order";
import styles from "./Content.module.scss";
import Cars from "Components/Cars";
import Footer from "Components/Footer";

const Content = () => {
    return (
        <main className={styles.root}>
            <Order/>
            <Cars/>
        </main>
    );
};

export default Content;