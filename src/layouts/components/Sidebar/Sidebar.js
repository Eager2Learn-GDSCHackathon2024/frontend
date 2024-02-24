import React from 'react';
import styles from './Sidebar.module.scss'
import ContentList from '../../../components/ContentList/ContentList';
function Sidebar() {
    let options;
  return (
    <div className={styles.sidebar}>
      <ContentList className="content-list"/>

    </div>
  );
}

export default Sidebar
