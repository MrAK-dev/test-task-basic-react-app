import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBlock from './ContentBlock.tsx';
import './AboutContentSection.css';
import Button from './Button.tsx';

const AboutContentSection: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoToHome = () => {
    navigate('/');
    // Прокручиваем к началу страницы
    window.scrollTo(0, 0);
  };

  // Данные для блоков контента
  const contentData = [
    {
      title: "Company",
      text: "Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit."
    },
    {
      title: "Team",
      text: "Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit."
    }
  ];

  return (
    <section className="about-content-section">
      <div className="container">
        {contentData.map((block, index) => (
          <ContentBlock 
            key={index}
            title={block.title}
            text={block.text}
          />
        ))}

        <div className="button-container">
          <Button variant="secondary" onClick={handleGoToHome} className="go-home-btn">
            GO TO HOME
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutContentSection; 