import React from 'react';
import styles from "./Charts.module.scss";
import Chart from "Components/Content/Charts/Chart";

const Charts = () => {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.title}>За что нас ценят</div>
                <p className={styles.description}>Предоставленные данные являются обобщенными результатами
                    опроса, который был проведен нами среди 198 новых клиентов. Со всеми результатами опроса можно
                    ознакомиться <a href="#">в статье</a>
                </p>
                <div className={styles.charts}>
                    <Chart number={50} description="клиентов оценили наши авто на отлично"/>
                    <Chart number={92} description="клиентов быстро получили всю необходимую информацию при первом контакте с менеджером"/>
                    <Chart number={94} description="клиентов получили авто не более чем за 30 минут после приезда в офис"/>
                    <Chart number={96} description="клиентов отметили, что получили чистое авто"/>
                    <Chart number={100} description="клиентов получили машину с полным баком"/>
                    <Chart number={93} description="клиентов сдали авто и вернули себе залог менее чем за 20 минут"/>
                </div>
            </div>
        </section>
    );
};

export default Charts;