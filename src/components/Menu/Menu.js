import React from 'react';
import styles from "./Menu.module.scss"

const Menu = ({open, onClose}) => {
    return (
        open ? <>
            <div className={styles.menu}>
                <ul>
                    <ul>
                        <li><a href="#">Головна</a></li>
                        <li><a href="#">Автопарк</a></li>
                        <li><a href="#">Інші послуги</a></li>
                        <li><a href="#">Для бізнесу</a></li>
                        <li><a href="#">Умови оренди</a></li>
                        <li><a href="#">Контакти</a></li>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Відгуки</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                    <li>
                        <div className={styles.language}>
                            <span><a href="#">RU</a></span>
                            <span><a href="#" className={styles.active}>UA</a></span>
                            <span><a href="#">EN</a></span>
                        </div>
                        <div className={styles.exchange}>
                            <span className={`${styles.value} ${styles.active}`}>USD</span>
                            <span className={styles.value}>UAH</span>
                            <span className={styles.value}>EUR</span>
                            <span className={styles.curs}>1 USD = 36.00 UAH</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.bg} onClick={onClose}/>
        </> : null
    );
};

export default Menu;