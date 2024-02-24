import React, { useEffect, useState } from 'react';

const HTMLViewer = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [url, setUrl] = useState('');
    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch HTML');
            }
            const data = await response.text();
            setHtmlContent(data);
            console.log (htmlContent);
        } catch (error) {
            console.error('Error fetching HTML:', error);
            
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="urlInput">Enter URL:</label>
                <input 
                    type="text" 
                    id="urlInput" 
                    value={url} 
                    onChange={(event) => setUrl(event.target.value)} 
                    required 
                />
                <button type="submit">Fetch HTML</button>
            </form>
            <div className="abc" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default HTMLViewer;
