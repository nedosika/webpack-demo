import React from 'react';
import playBtn from "./assets/play.svg";
import styles from "./Video.module.scss";

const Video = () => {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <a className={styles.link} href="https://www.youtube.com/watch?v=ACJjhSBhsGQ">
                    <img alt="play" src={playBtn}/>
                    <div className="video-destination"/>
                </a>
            </div>
        </section>
    );
};

export default Video;