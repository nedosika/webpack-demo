import React from 'react';
import Order from "Components/Content/Order";
import styles from "./Content.module.scss";
import Cars from "Components/Content/Cars";
import Carousel from "Components/Content/Carousel";
import Charts from "Components/Content/Charts";
import Video from "Components/Content/Video";

const Content = () => {
    return (
        <main className={styles.root}>
            <Order/>
            <Cars/>
            <Carousel/>
            <Charts/>
            <Video/>
        </main>
    );
};

export default Content;