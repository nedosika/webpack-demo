import React from 'react';
import styles from "./Carousel.module.scss";
import earlyBooking from "./assets/img/early-booking-banner.jpg";

const Carousel = () => {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <ul className={styles.indicators}>
                    <li/>
                    <li className={styles.active}/>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                </ul>

                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.area}>
                            <img
                                title="Раннее бронированиеавтомобиля"
                                alt="Раннее бронированиеавтомобиля"
                                className={styles.image}
                                src={earlyBooking}
                            />
                            <div className={styles.info}>
                                <div className={styles.title}><span>Раннее бронирование</span>автомобиля</div>
                                <div className={styles.text}>
                                    Забронируйте понравившееся авто заранее и получите скидку до 15%
                                </div>
                                <a href="#">
                                    <span className={styles.button}>Подробнее</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;