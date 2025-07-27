import React from 'react';
import './ContentBlock.css';

interface ContentBlockProps {
  title: string;
  text: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, text }) => {
  return (
    <div className="content-block">
      <h2 className="content-title">{title}</h2>
      <p className="content-text">{text}</p>
    </div>
  );
};

export default ContentBlock; 