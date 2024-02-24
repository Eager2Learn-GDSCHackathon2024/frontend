import styles from "./SideBarFooter.module.scss"

function SideBarFooter() {
    return (
        <div className={styles.footer}>
            <p>Transcript</p>
            <label class={styles.switch}>
            <input type='checkbox'/>
            <span class={styles.slider}></span>
            </label>
        </div>
    )
}

export default SideBarFooter