import React, { useState } from 'react';
import ContentList from '../../../components/ContentList/ContentList';
import styles from './Sidebar.module.scss'
import Script from '../../../components/Script/Script';
import { useEffect } from 'react';
import { FaHome } from "react-icons/fa";


let current = <ContentList className="content-list" icon="home" name="Môn Toán"/>;


function Sidebar({icon, name}) {
  const [state, setState] = useState(<ContentList className="content-list" icon="home" name="Môn Toán"/>)

  let IconComponent
  switch (icon) {
      case 'home':
          IconComponent = <FaHome className={styles.icon}/>
          break;
      default:
          IconComponent = null
}

  const changeState = () => {
    setState(
      state === 0 ? 1 : 0
    )
  }

  useEffect(() => {
    if (state === 0) {
      current = <ContentList className="content-list" icon="home" name="Môn Toán"/>;
    } else {
      current = <Script/>;
    }
  }, [state])

  return (
      <div className={styles.sidebar}>
        {IconComponent}
        <h2 className={styles.name}>{name}</h2>
        {current}
        <div className={styles.line}/>
        <div className={styles.footer}>
            <p>Transcript</p>
            <label className={styles.switch}>
            <input type='checkbox'/>
            <span className={styles.slider} onClick={changeState}></span>
            </label>
        </div>
      </div>
  );
}

export default Sidebar
