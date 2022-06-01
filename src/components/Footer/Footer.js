import React from 'react';
import styles from "./Footer.module.scss";
import facebook from "./assets/facebook.svg";
import youtube from "./assets/youtube.svg";
import instagram from "./assets/instagram.svg";
import visa from "./assets/visa.svg";
import mastercard from "./assets/mastercard.svg";
import bitcoin from "./assets/bitcoin.svg";
import arto from "./assets/arto.svg";

const Footer = () => {
    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <img
                            alt="logo"
                            loading="lazy"
                            src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/logotype_footer.svg"
                            height="63" width="167"
                        />
                        <div className={styles.social}>
                            <a href="#">
                                <img alt="facebook" src={facebook}/>
                            </a>
                            <a href="#">
                                <img alt="youtube" src={youtube}/>
                            </a>
                            <a href="#">
                                <img alt="instagram" src={instagram}/>
                            </a>
                        </div>
                        <div className={styles.payments}>
                            <img alt="visa" src={visa}/>
                            <img alt="mastercard" src={mastercard}/>
                            <img alt="bitcoin" src={bitcoin}/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.mainText}>ПРО КОМПАНІЮ</h3>
                        <ul className={styles.secondText}>
                            <a href="#">Про нас</a>
                            <a href="#">Контакти</a>
                            <a href="#">Гарантії</a>
                            <a href="#">Партнери</a>
                            <a href="#">Акції</a>
                            <a href="#">Доставка та оплата</a>
                            <a href="#">Запитання-відповідь</a>
                            <a href="#">Оренда авто в Європі</a>
                            <a href="#">Здати авто в прокат</a>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.mainText}>УМОВИ ОРЕНДИ</h3>
                        <ul className={styles.secondText}>
                            <a href="#">Умови прокату з водієм</a>
                            <a href="#">Оренда авто без застави</a>
                            <a href="#">Додаткове страхування авто</a>
                            <a href="#">Оренда авто з виїздом за кордон</a>
                            <a href="#">Раннє бронювання</a>
                            <a href="#">Оренда авто на добу</a>
                            <a href="#">Що таке застава і навіщо вона потрібна?</a>
                            <a href="#">Додаткове обладнання на період оренди</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}/>
            <div className={styles.postFooter}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.text}>
                            © 2022 Seven Cars - оренда авто.
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.text}>Підтримка і SEO-просування
                            <a href="#" rel="nofollow" target="_blank">
                                <img alt="arto" src={arto}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;