import React, {useEffect, useState} from 'react';
import {dashboardData} from '../../helpers/mockData';
import Case from "./Case/Case";

import styles from './Portfolio.module.scss';

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (dashboardData?.length > 0) setData(dashboardData);
    }, [dashboardData]);


    return (
        <main className={`${styles.portfolio} `}>
            <div className={`${styles.container} container`}>

                {/*<div className="mainTitle lightTitle">*/}
                {/*    <span className="sectionTitle">Створюємо максимально корисні <br/> IT продукти</span>*/}
                {/*    <h1 className="sectionSubTitle">Портфоліо <span className="shadowText">Портфоліо</span></h1>*/}
                {/*</div>*/}
                {/*<div className={`${styles.portfolio__title}`}>Portfolio</div>*/}
                <Case/>
            </div>
        </main>
    );
};

export default Portfolio;
