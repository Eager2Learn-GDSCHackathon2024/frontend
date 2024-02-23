import React, { useState } from 'react';
import {FaArrowUp} from 'react-icons/fa'
import './InputBox.scss'
function InputBox() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    console.log('submit clicked')
  } 
  return (
    <div className='input-box'>

      <input
        className='input-prompt'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Điền yêu cầu vào đây nhé"
      />
      <FaArrowUp id='submit-prompt' onChange={handleSubmit}/>
    </div>
  );
}

export default InputBox;
