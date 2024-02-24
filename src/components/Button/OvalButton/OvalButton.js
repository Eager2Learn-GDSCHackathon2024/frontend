import React from "react";
import { FaStar, FaMicrophone } from 'react-icons/fa'
import styles from './OvalButton.module.scss'
import { Link } from 'react-router-dom';

function OvalButton({ content, link }) {
    return (<Link to={link}>
        <button className={styles.ovalButton}>
            {content}
        </button>    </Link>
    )
}
export default OvalButton;