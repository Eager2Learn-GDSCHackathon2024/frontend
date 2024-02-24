import React from "react";
import Button from "../../components/Button/Button";
import styles from './Main.module.scss'

import MainContent from "../../layouts/components/Maincontent/Maincontent"
import InputBox from "../../components/Input/InputBox";
import Sidebar from "../../layouts/components/Sidebar/Sidebar";
function Main() {
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <div className={styles.main}>
            <div className={styles.maincontent}>       
                <MainContent />
            </div>
            <div className={styles.sidebar}>
                <Sidebar icon="home" name="Môn Toán" />
            </div>
        </div>
    )
}

export default Main