import React, { useState } from 'react';
import {FaArrowUp} from 'react-icons/fa'
import styles from './InputBox.module.scss'
function InputBox() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    console.log('submit clicked')
  } 
  return (
    <div className={styles.inputBox}>

      <input
        className={styles.inputPrompt}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Điền yêu cầu vào đây nhé"
      />
      <FaArrowUp id={styles.submitPrompt} onChange={handleSubmit}/>
    </div>
  );
}

export default InputBox;
