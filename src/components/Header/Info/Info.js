import React from 'react';
import styles from "./Info.scss";

const Info = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <span className={styles.workingTime}>
                    <img alt="clock" src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/clock.svg"/>
                    з 8:00 до 20:00                </span>
                <a href="mailto:info@7cars.com.ua">
                    <img alt="mail" src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/mail.svg"/>
                    info@7cars.com.ua </a>
                <div className={styles.floatRight}>
                    <a href="https://7cars.com.ua/ua/vhid-reyestratsiya/">
                        <img
                            alt="account"
                            title="Зареєструйтеся на нашому сайті, щоб відслідковувати інформацію про доступність авто в реальному часі"
                            src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/my_account.svg"
                        />
                        Вхід у кабінет </a>
                    <div className={styles.dropArea}>
                        <span className={styles.lang}>
                            UA                        </span>
                    </div>
                    <div className={styles.dropArea}>
                        <span className={styles.lang}>
                            USD                        </span>
                    </div>
                    <div className={styles.curs}>1 USD = 36.00 UAH</div>
                </div>
            </div>
        </div>
    );
};

export default Info;