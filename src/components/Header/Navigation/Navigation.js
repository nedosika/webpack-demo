import React from 'react';
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={styles.root}>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <a href="#">Головна</a></li>
                    <li>
                        <a href="#">Автопарк</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Інші послуги</a>

                    </li>
                    <li><a href="#">Для бізнесу</a></li>
                    <li className="menu-item">
                        <a href="#">Умови оренди</a></li>
                    <li className="menu-item">
                        <a href="#">Контакти</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Про нас</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Відгуки</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Блог</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;