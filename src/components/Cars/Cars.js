import React from 'react';
import styles from "./Cars.module.scss";
import Car from "Components/Cars/Car";
import econom from "./assets/econom.jpg";
import business from "./assets/business.jpg";
import middle from "./assets/middle.jpg";
import minivan from "./assets/minivan.jpg";
import premium from "./assets/premium.jpg";
import offroad from "./assets/offroad.jpg";

const cars = [
    {
        img: econom,
        type: 'Економ',
        cost: {
            from: 15,
            to: 45
        }
    },
    {
        img: business,
        type: 'Бізнес',
        cost: {
            from: 43,
            to: 90
        }
    },
    {
        img: middle,
        type: 'Середній',
        cost: {
            from: 30,
            to: 70
        }
    },
    {
        img: minivan,
        type: 'Мінивен',
        cost: {
            from: 33,
            to: 280
        }
    },
    {
        img: offroad,
        type: 'Позашляховики',
        cost: {
            from: 36,
            to: 500
        }
    },
    {
        img: premium,
        type: 'Преміум',
        cost: {
            from: 85,
            to: 600
        }
    }
]

const Cars = () => {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.prev}/>
                <div className={styles.next}/>
                <div className={styles.row}>
                    <div className={styles.scrollArea}>
                        <div className={styles.carsType}>
                            {
                                cars.map((car) =>
                                    <Car
                                        img={car.img}
                                        cost={car.cost}
                                        link='#'
                                        name={car.type}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cars;