import React from 'react';
import './LearningForm.module.scss'; // Import your CSS file for styling
import DynamicTextDisplay from '../../utils/DynamicTextDisplay';

const LearningFormTemplate = ({ inputPosition, imagePosition }) => {


  return (
    <div className="form-container">
      <DynamicTextDisplay/>
        {/* <h1 className='title'></h1>
      <div className={`input ${inputPosition}`}>Input Field</div>
      <div className={`image ${imagePosition}`}>Image</div> */}
    </div>
  );
}

export default LearningFormTemplate;