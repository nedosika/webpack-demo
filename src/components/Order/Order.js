import React from 'react';
import styles from "./Order.module.scss";

const Order = () => {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Автопрокат, якому довіряють!</h2>
                <div className={styles.rateArea}>
                    <span>4.5 / 5 </span>
                    <span>
                        <span className={styles.star}/>
                        <span className={styles.star}/>
                        <span className={styles.star}/>
                        <span className={styles.star}/>
                        <span className={styles.emptyStar}>
                            <span className={styles.percentStar}/>
                        </span>
                    </span> за <a
                            className={styles.googleLink}
                            target="_blank"
                            href="#"
                        >
                            Google відгуками
                        </a>
                </div>
                <div className={styles.search}>
                    <form>
                        <div className={styles.formName}>Підібрати авто в прокат</div>
                        <div>
                            <label className={styles.label} htmlFor="search-avto-select">Місто видачі</label>
                            <select className={styles.selectInput} id="search-avto-select">
                                <option value="Київ">
                                    Київ
                                </option>
                                <option value="Бориспіль">
                                    Бориспіль
                                </option>
                                <option value="Львів">
                                    Львів
                                </option>
                                <option value="Одесса">
                                    Одесса
                                </option>
                                <option value="Дніпро">
                                    Дніпро
                                </option>
                                <option value="Вінниця">
                                    Вінниця
                                </option>
                                <option value="Чернівці">
                                    Чернівці
                                </option>
                                <option value="Луцьк">
                                    Луцьк
                                </option>
                                <option value="Житомир">
                                    Житомир
                                </option>
                                <option value="Івано-Франківськ">
                                    Івано-Франківськ
                                </option>
                                <option value="Тернопіль">
                                    Тернопіль
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className={styles.label} htmlFor="time-1">Дата і час видачі</label>
                            <input
                                className={styles.date}
                                type="datetime-local"
                                id="time-1"
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                                placeholder="dd.mm.yy --:--"
                                value="2022-05-30T16:30"
                                min="2022-05-30T14:25"
                            />
                        </div>
                        <div>
                            <label className={styles.label} htmlFor="time-2">Дата і час повернення</label>
                            <input
                                className={styles.date}
                                type="datetime-local"
                                id="time-2"
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                                placeholder="dd.mm.yy --:--"
                                value="2022-06-02T16:30"
                                min="2022-05-30T14:25"
                            />
                        </div>
                        <div>
                            <button type="submit" className="search-avto">Підібрати авто</button>
                        </div>
                        <div>
                            <div id="short-error-message" className="err-msg">Введіть коректні дати</div>
                            <div className="detail-search">
                                <img
                                    src=""
                                    width="10"
                                    height="10"
                                />
                                Більше опцій
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;