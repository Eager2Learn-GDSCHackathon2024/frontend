import React from "react";
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/Input/InputBox";
import styles from './Maincontent.module.scss'
function MainContent() {
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <section className={styles.interact}>
            <section className={styles.interactPrompt}>
                <div id={styles.buttonMic}>
                    <Button onclick={handleClick} icon="mic"></Button>
                </div>
                <div id={styles.inputBox}>
                    <InputBox></InputBox>
                </div>
            </section>

        </section>
    )
}

export default MainContent