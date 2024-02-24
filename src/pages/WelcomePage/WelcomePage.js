import React from 'react';
import styles from  './WelcomePage.module.scss'
import OvalButton from '../../components/Button/OvalButton/OvalButton';
const WelcomePage = () => {
    return (
        <section className={styles.background}>  
            <h1 className={styles.title}>Chào mừng đến với Eager2Learn</h1>
            <OvalButton content={"Hãy bắt đầu nào"} link={'user-information'}/>
        </section>
    )
}

export default WelcomePage;