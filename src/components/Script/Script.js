import React from 'react';
import styles from './Script.module.scss'; // Import CSS file for styling

function Script({icon, name}) {
  return (
    <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.content}>AAAAAAAAA</p>
    </div>
  );
}

export default Script;
