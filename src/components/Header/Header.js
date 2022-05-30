import React from 'react';
import styles from "./Header.module.css";
import logoImg from "./logotype.svg";
import locationImg from "./location.svg";
import accountImg from "./my_account.svg";

const Header = () => {
    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <a href="#">
                    <img alt="logo" src={logoImg} width="167"/>
                </a>
                <div className={styles.buttons}>
                    <a href="tel:+38 (012) 345 678 90">
                        <img
                            alt="phone"
                            src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/phone_2.svg"
                            width="24"
                        />
                    </a>
                    <div>
                        <img
                            alt="location"
                            src={locationImg}
                            width="19"
                        />
                    </div>
                    <a href="#">
                        <img
                            alt="account"
                            src={accountImg}
                            width="27"
                        />
                    </a>
                </div>
                <div className={styles.menu}>
                    <svg className="open" xmlns="http://www.w3.org/2000/svg" width="30" height="22">
                        <switch>
                            <g>
                                <path d="M30-.001H0v1.998h30V-.001zM0 11.998h30V9.999H0v1.999zm0 8v2.001h30v-2.001H0z"
                                      fill="#1d252c"/>
                            </g>
                        </switch>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;