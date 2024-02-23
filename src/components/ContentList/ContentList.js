import React from 'react';
import styles from './ContentList.module.scss'; // Import CSS file for styling
import Item from './Item/Item';

function ContentList() {
  // Dummy list of subjects
  const subjects = ['Math', 'Science', 'History', 'English', 'Geography', 'Art', 'Music'];
 

  return (

      <div className={styles.content}>
        
        <div className={styles.list}>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>
                <Item icon="home" content={subject}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      

  );
}

export default ContentList;
