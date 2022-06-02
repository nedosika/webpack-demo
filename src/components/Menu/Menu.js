import React from 'react';
import styles from "./Menu.module.scss"

const Menu = ({open, onClose}) => {
    return (
        open ? <>
            <div id="hamburger-menu" className={styles.menu}>
                <ul>
                    <ul id="menu-glavnoe-ukr-1" className="">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-2965">
                            <a href="https://7cars.com.ua/ua/" aria-current="page">Головна</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5517">
                            <a href="#">Автопарк</a>
                            <div className="drop-menu-h-icon"/>
                            <ul className="drop-menu-h drop-menu-h-area">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15907">
                                    <a
                                        href="#">Прокат авто у Києві</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15908">
                                    <a
                                        href="#">Оренда авто у Львові</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15909">
                                    <a
                                        href="#">Прокат авто в Одесі</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15910">
                                    <a
                                        href="#">Оренда авто у Дніпрі</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15911">
                                    <a
                                        href="#">Оренда авто у Харкові</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11899">
                                    <a
                                        href="https://7cars.com.ua/ua/cat-auto/prokat-vinnytsia-uk/">Прокат авто у
                                        Вінниці</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11900">
                                    <a
                                        href="https://7cars.com.ua/ua/cat-auto/prokat-chernivtsi-uk/">Прокат авто у
                                        Чернівцях</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12805">
                                    <a
                                        href="#">Оренда авто в Луцьку</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12806">
                                    <a
                                        href="#">Оренда авто в Житомирі</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12807">
                                    <a
                                        href="#">Оренда авто в Івано-Франківську</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12808">
                                    <a
                                        href="#">Оренда авто в Тернополі</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10971">
                                    <a
                                        href="#">Оренда
                                        мікроавтобуса</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3851">
                                    <a
                                        href="#">Оренда автобусів</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15912">
                                    <a
                                        href="#">Оренда кабріолетів</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11976">
                                    <a
                                        href="https://7cars.com.ua/ua/truck-rental-uk/">Прокат вантажних авто</a></li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2660">
                            <a href="#">Інші послуги</a>
                            <div className="drop-menu-h-icon"/>
                            <ul className="drop-menu-h drop-menu-h-area">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2665">
                                    <a
                                        href="#">Авто з водієм</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2667">
                                    <a
                                        href="#">Трансфер</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4090">
                                    <a
                                        href="#">Довгострокова оренда</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6681">
                                    <a
                                        href="#">Оренда з правом викупу</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6679">
                                    <a
                                        href="#">Авто у лізинг</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6678">
                                    <a
                                        href="#">Підбір автомобіля</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13106">
                                    <a
                                        href="#">Управління автопарком</a></li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15848"><a
                            href="#">Для бізнесу</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12511"><a
                            href="#">Умови оренди</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2684"><a
                            href="#">Контакти</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12512"><a
                            href="#">Про нас</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4268"><a
                            href="#">Відгуки</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12508"><a
                            href="#">Блог</a></li>
                    </ul>
                    <li className="hamburger-contact-area">
                        <div className="activate">
                            <span><a href="#">RU</a></span>
                            <span><a href="#" className="act">UA</a></span>
                            <span><a href="#">EN</a></span>
                        </div>
                        <div className="activate valute">
                            <span className="val-mob act " data-code="usd">USD</span>
                            <span className="val-mob" data-code="uah">UAH</span>
                            <span className="val-mob" data-code="eur">EUR</span>
                            <span className="curs">1 USD = 36.00 UAH</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.bg} onClick={onClose}/>
        </> : null
    );
};

export default Menu;