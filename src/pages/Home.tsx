import React from 'react';
import UniversalHero from '../components/UniversalHero.tsx';
import TrustedBySection from '../components/TrustedBySection.tsx';
import WeOfferSection from '../components/WeOfferSection.tsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.tsx';
import OurWorkSection from '../components/OurWorkSection.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';
import DiscussIdeaSection from '../components/DiscussIdeaSection.tsx';
import Button from '../components/Button.tsx';

// Header и Footer рендерятся в App.tsx, здесь только секции Home
const Home: React.FC = () => {
  const handleAttractClick = (event: React.FormEvent<HTMLFormElement>) => {
    // Обработка отправки формы
    event.preventDefault();
  };

  return (
    <>
      <UniversalHero
        title={
          <>
            Attract <span className="hero-gradient">NewLeads</span> like never before
          </>
        }
        description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros"
      >
        <form className="hero-form" onSubmit={handleAttractClick}>
          <input className="hero-input" type="email" placeholder="Email" />
          <Button variant="hero" type="submit">
            ATTRACT
          </Button>
        </form>
      </UniversalHero>
      <TrustedBySection />
      <WeOfferSection />
      <WhyChooseUsSection />
      <OurWorkSection />
      <TestimonialsSection />
      <DiscussIdeaSection />
    </>
  );
};

export default Home; 