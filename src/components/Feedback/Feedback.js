import React from 'react';
import styles from "./Feedback.module.scss";

const Feedback = () => {
    return (
        <div className={styles.root}>
            <div className={styles.phone}>
                <img
                    alt="feedback"
                    loading="lazy"
                    src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/call.svg"
                />
            </div>
        </div>
    );
};

export default Feedback;