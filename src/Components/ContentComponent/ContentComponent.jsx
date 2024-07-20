import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import txt from '../../assets/HomepageContent.txt';
const ContentComponent = () => {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    fetch(txt)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error fetching the text file:', error));
  }, []);

  return (
    <div>
    <p>
      {isExpanded ? content : `${content.substring(0, 100)}...`}
    </p>
    <Button variant="link" onClick={toggleReadMore}>
      {isExpanded ? 'Read Less' : 'Read More'}
    </Button>
  </div>
  );
};

export default ContentComponent;
