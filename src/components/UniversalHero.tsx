import React from 'react';
import './Hero.css';
import Button from './Button.tsx';

interface UniversalHeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
  variant?: 'home' | 'about';
}

const UniversalHero: React.FC<UniversalHeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  children,
  variant = 'home'
}) => {
  // Определяем классы в зависимости от варианта
  const heroClass = variant === 'about' ? 'hero hero--about' : 'hero';

  return (
    <section className={heroClass}>
        <div className="container">
        <div className="hero-bg" />
        <div className="hero-content">
            {subtitle && (
            <div className="hero-label" style={{ 
                color: '#FFA800', 
                fontSize: '2.4rem', 
                fontWeight: '700',
                marginBottom: '1.6rem'
            }}>
                {subtitle}
            </div>
            )}
            
            <h1 className="hero-title">
            {title}
            </h1>
            
            {description && (
            <p className="hero-subtitle">
                {description}
            </p>
            )}
            
            {children}
            
            {buttonText && (
            <Button 
                variant="hero" 
                onClick={onButtonClick}
            >
                {buttonText}
            </Button>
            )}
        </div>
      </div>
    </section>
  );
};

export default UniversalHero; 