import React, { useState } from 'react'
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/Input/InputBox";
import styles from './Maincontent.module.scss'
import LearningFormTemplate from '../../../components/Form/LearningForm'
function MainContent() {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (content) => {
        setInputValue(content); // Set input value to the received content
        console.log("From main", content);
    };

    return (
        <section className={styles.interact}>
            <div className={styles.lecture}> <LearningFormTemplate/> </div>
            <section className={styles.interactPrompt}>
                <div id={styles.buttonMic}>
                    <Button onClick={(content) => handleButtonClick(content)}></Button>
                </div>
                <div id={styles.inputBox}>
                    <InputBox inputVoice={inputValue} onChange={(e) => setInputValue(e.target.value)}></InputBox>
                </div>
            </section>

        </section>
    )
}

export default MainContent