import React from 'react';
import styles from "./Header.module.scss";
import logoImg from "./assets/logotype.svg";
import phoneImg from "./assets/phone_2.svg";
import locationImg from "./assets/location.svg";
import accountImg from "./assets/my_account.svg";
import Info from "Components/Info";
import Navigation from "Components/Navigation";

const Header = ({onShowMenu}) => {
    return (
        <header className={styles.root}>
            <Info/>
            <div className={styles.wrapper}>
                <a href="#" className={styles.logo}>
                    <img alt="logo" src={logoImg} width="167"/>
                </a>
                <div className={styles.buttons}>
                    <a href="tel:+38 (012) 345 678 90">
                        <img
                            className={styles.icon}
                            alt="phone"
                            src={phoneImg}
                            width="24"
                        />
                    </a>
                    <div>
                        <img
                            className={styles.icon}
                            alt="location"
                            src={locationImg}
                            width="19"
                        />
                    </div>
                    <a href="#">
                        <img
                            className={styles.icon}
                            alt="account"
                            src={accountImg}
                            width="27"
                        />
                    </a>
                </div>
                <div className={styles.mobileHide}>
                    <img
                        alt="place"
                        src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/location.svg"
                    />
                    <select name="city" className={styles.citySelect}>
                        <option value="0" selected="">
                            Київ, вул. Ізюмська 5а
                        </option>
                        <option value="1">
                            Бориспіль, Аеропорт (КВР)
                        </option>
                        <option value="2">
                            Львів, Аеропорт «Львів»
                        </option>
                        <option value="3">
                            Одеса, вул. Середньофонтанська 19а
                        </option>
                        <option value="4">
                            Дніпро, Аеропорт «Дніпро»
                        </option>
                    </select>
                </div>
                <div className={styles.mobileHide}>
                    <img
                        alt="phone"
                        src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/smartphone.svg"
                    />
                    <a rel="nofollow" href="tel:+38 (067) 521 78 77">
                        +38 (067) 521 78 77
                    </a>
                    <div className={styles.social}>
                        <a rel="nofollow" href="tel:+38 (067) 521 78 77"/>
                        <a rel="nofollow" href="viber://add?number=380675217877">
                            <img
                                alt="Viber"
                                src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/viber.svg"
                            />
                        </a>
                        <a rel="nofollow" href="https://t.me/SevenCarsBot">
                            <img
                                alt="Telegram"
                                src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/telegram.svg"
                            />
                        </a>
                        <a rel="nofollow" href="https://api.whatsapp.com/send?phone=+380675217877">
                            <img
                                alt="Whatsapp"
                                src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/whatsapp.svg"
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.mobileHide}>
                    <img alt="phone" src="https://7cars.com.ua/wp-content/themes/avto_n/includes/img/icon/phone_2.svg"/>
                    <a href="tel:+38 (044) 531 78 77">+38 (044) 531 78 77 </a>
                </div>
                <div className={styles.menu} onClick={onShowMenu}>
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
            <Navigation/>
        </header>
    );
};

export default Header;