import React from 'react';
import styles from './ContentList.module.scss'; // Import CSS file for styling

function ContentList() {
  // Dummy list of subjects
  const subjects = ['Math', 'Science', 'History', 'English', 'Geography', 'Art', 'Music'];

  return (
    <div className={styles.sidebar}>
      <h2>Subjects</h2>
      <div className={styles.subjectlist}>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContentList;
