import React from 'react';
import styles from "./Info.scss";
import clock from "./assets/img/clock.svg";
import mail from "./assets/img/mail.svg";
import account from "./assets/img/my_account.svg";

const Info = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <span className={styles.workingTime}>
                    <img alt="clock" src={clock}/>
                    з 8:00 до 20:00                </span>
                <a href="mailto:info@7cars.com.ua">
                    <img alt="mail" src={mail}/>
                    info@7cars.com.ua </a>
                <div className={styles.floatRight}>
                    <a href="#">
                        <img
                            alt="account"
                            title="Зареєструйтеся на нашому сайті, щоб відслідковувати інформацію про доступність авто в реальному часі"
                            src={account}
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