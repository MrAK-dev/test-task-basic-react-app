import React from 'react';
import UniversalHero from '../components/UniversalHero.tsx';
import AboutContentSection from '../components/AboutContentSection.tsx';

// Страница About с универсальным Hero компонентом и контентной секцией
const About: React.FC = () => {
  const handleContactClick = () => {
    // Обработка нажатия кнопки CONTACT
  };

  return (
    <>
      <UniversalHero
        variant="about"
        subtitle="About us"
        title="Shadient.co"
        description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros"
        buttonText="CONTACT"
        onButtonClick={handleContactClick}
      />
      <AboutContentSection />
    </>
  );
};

export default About; 