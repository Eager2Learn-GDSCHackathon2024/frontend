import React, { useEffect, useState } from 'react'
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/Input/InputBox";
import styles from './Maincontent.module.scss'
import LearningFormTemplate from '../../../components/Form/LearningForm'
function MainContent() {
    const [inputValue, setInputValue] = useState('');
    const htmlContentPhanSo = `
        <div>
            <h1 style={{fontSize:"30px"}}>CỘNG 2 PHÂN SỐ</h1>
          <h2>A. Mục tiêu bài học:</h2>
          <ul>
            <li>Giúp học sinh nắm vững kiến thức về phép cộng hai phân số.</li>
            <li>Rèn luyện kỹ năng:
              <ul>
                <li>Quy đồng mẫu số hai phân số.</li>
                <li>Cộng hai phân số có cùng mẫu số.</li>
                <li>Vận dụng kiến thức vào giải bài tập.</li>
              </ul>
            </li>
          </ul>
    
          <h2>B. Nội dung bài học:</h2>
          <h3>Kiến thức:</h3>
          <ul>
            <li>Khái niệm phép cộng hai phân số.</li>
            <li>Quy tắc cộng hai phân số:
              <ul>
                <li>Cộng hai phân số có cùng mẫu số: ta cộng hai tử số và giữ nguyên mẫu số.</li>
                <li>Cộng hai phân số khác mẫu số: ta quy đồng mẫu số hai phân số, rồi cộng hai phân số theo quy tắc cộng hai phân số có cùng mẫu số.</li>
              </ul>
            </li>
          </ul>
    
          <h3>Kỹ năng:</h3>
          <ul>
            <li>Quy đồng mẫu số hai phân số.</li>
            <li>Cộng hai phân số có cùng mẫu số.</li>
            <li>Vận dụng kiến thức vào giải bài tập.</li>
          </ul>
        </div>
      `;

    const handleButtonClick = (content) => {
        setInputValue(content); // Set input value to the received content
        console.log("From main", content);
    };
    useEffect(() => {
        const similarWords = ["phân số", "fraction", "phan so"]; // Các từ tương tự với "Môn Toán"
        const normalizedInputValue = inputValue.toLowerCase();
        
        console.log("inputValue", inputValue);
        
        const foundSimilarWords = similarWords.filter(word => normalizedInputValue.includes(word.toLowerCase()));
                
        if (foundSimilarWords.length > 0) {
          console.log('Tìm thấy từ tương tự với "Môn Toán":', foundSimilarWords);
        }
        console.log("--------------------");

      }, [inputValue]);
      
    return (
        <section className={styles.interact}>
            <div className={styles.lecture} dangerouslySetInnerHTML={{ __html: htmlContentPhanSo }} />

            <section className={styles.interactPrompt}>

                <div id={styles.buttonMic}><Button onClick={(content) => handleButtonClick(content)}></Button></div>
                <div id={styles.inputBox}><InputBox inputVoice={inputValue} onChange={(e) => setInputValue(e.target.value)}></InputBox></div>
            
            </section>

        </section>
    )
}

export default MainContent