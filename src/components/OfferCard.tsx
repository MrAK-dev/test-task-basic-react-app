import React from 'react';
import './OfferCard.css';

interface OfferCardProps {
  icon: string;
  title: string;
  desc: string;
  alt: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ icon, title, desc, alt }) => (
  <div className="offer-card">
    <div className="offer-icon">
      <img src={icon} alt={alt} width={48} height={48} />
    </div>
    <h3 className="offer-card-title">{title}</h3>
    <p className="offer-card-desc">{desc}</p>
  </div>
);

export default OfferCard; 