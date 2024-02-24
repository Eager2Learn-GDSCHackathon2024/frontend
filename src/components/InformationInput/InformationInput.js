import styles from "./InformationInput.module.scss"

function InformationInput() {
    return (
        <input
            className={styles.inputText}
            type="text"
        />
    )
}

export default InformationInput