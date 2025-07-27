import React from 'react';
import './WeOfferSection.css';
import OfferCard from './OfferCard.tsx';

// Данные для карточек "We Offer" с svg-иконками
const offers = [
  {
    icon: '/img/weOffer/00-branding.svg',
    title: 'Branding',
    desc: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    alt: 'Branding icon',
  },
  {
    icon: '/img/weOffer/01-webdev.svg',
    title: 'Web development',
    desc: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus',
    alt: 'Web development icon',
  },
  {
    icon: '/img/weOffer/02-marketing.svg',
    title: 'Digital marketing',
    desc: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.',
    alt: 'Digital marketing icon',
  },
  {
    icon: '/img/weOffer/03-mobileapp.svg',
    title: 'Mobile App',
    desc: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    alt: 'Mobile app icon',
  },
  {
    icon: '/img/weOffer/04-seo.svg',
    title: 'SEO',
    desc: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus',
    alt: 'SEO icon',
  },
  {
    icon: '/img/weOffer/05-usertesting.svg',
    title: 'User testing',
    desc: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.',
    alt: 'User testing icon',
  },
];

const WeOfferSection: React.FC = () => (
    <div className="container">
      <section className="weoffer">
          <h2 className="weoffer-title">We Offer</h2>
          <p className="weoffer-desc">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          </p>
          <div className="weoffer-grid">
            {offers.map((offer) => (
              <OfferCard
                key={offer.title}
                icon={offer.icon}
                title={offer.title}
                desc={offer.desc}
                alt={offer.alt}
              />
            ))}
          </div>
      </section>
    </div>
);

export default WeOfferSection; 