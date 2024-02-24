import React, { useState, useEffect } from 'react';

import {FaArrowUp} from 'react-icons/fa'
import styles from './InputBox.module.scss'
function InputBox({inputVoice}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputVoice !== undefined) {
      setInputValue(inputVoice);
    }
  }, [inputVoice]);

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
        value={inputValue} or
        onChange={handleChange}
        placeholder="Điền yêu cầu vào đây nhé"
      />
      <FaArrowUp id={styles.submitPrompt} onChange={handleSubmit}/>
    </div>
  );
}

export default InputBox;
