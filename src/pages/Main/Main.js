import React from "react";
import Button from "../../components/Button/Button";
import MainContent from "../../layouts/components/Maincontent/Maincontent"
import InputBox from "../../components/Input/InputBox";
import Sidebar from "../../layouts/components/Sidebar/Sidebar";
import styles from './Main.module.scss'
function Main() {
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <div className={styles.main}>
                <MainContent/>
                <Sidebar className="sidebar" icon="home" name="Môn Toán"/>
        </div>
    )
}

export default Main