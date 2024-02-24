import React from 'react';

const LecturePart = ({ part }) => {
    // Render different input types based on the content of each part

    // lectureContent.json
    let lectureContent = [
        {
            "type": "text",
            "content": "Introduction to React"
        },
        {
            "type": "image",
            "content": "image-url.jpg"
        },
        {
            "type": "text",
            "content": "React Components"
        }
    ]

    return (
        lectureContent.map((part, index) => (
            <div className='lecture-part'key={index}>
                {part.type === 'text' && <p>{part.content}</p>}
                {part.type === 'image' && <img src={part.content} alt="lecture slide" />}
            </div>
        ))
    );
};

export default LecturePart