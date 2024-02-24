import React from 'react';

function MyComponent() {
  // HTML content that you want to render
  const htmlContent = '<h1>Hello, <em>world</em>!</h1>';

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MyComponent;
