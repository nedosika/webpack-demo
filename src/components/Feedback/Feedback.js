import React from 'react';
import styles from "./Feedback.module.scss";
import call from "./assets/img/call.svg";

const Feedback = () => {
    return (
        <div className={styles.root}>
            <div className={styles.phone}>
                <img
                    alt="feedback"
                    loading="lazy"
                    src={call}
                />
            </div>
        </div>
    );
};

export default Feedback;