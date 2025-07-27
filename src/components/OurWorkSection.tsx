import React from 'react';
import './OurWorkSection.css';
import Button from './Button.tsx';

// Данные для карточек проектов с ручным позиционированием
const projects = [
  {
    badge: 'WEBSITE',
    title: 'Creative landing page',
    image: true,
    gridColumn: 1,
    gridRow: '1 / span 2',
  },
  {
    badge: 'DIGITAL MARKETING',
    title: 'Why We Collect User’s Data',
    image: false,
    gridColumn: 2,
    gridRow: '1',
  },
  {
    badge: 'BRANDING',
    title: 'Creative Branding',
    image: false,
    gridColumn: 1,
    gridRow: '3',
  },
  {
    badge: 'USER TESTING',
    title: 'Creative landing page',
    image: true,
    gridColumn: 2,
    gridRow: '2 / span 2',
  },
  {
    badge: 'DEVELOPMENT',
    title: 'Automation. Advanced Level',
    image: false,
    gridColumn: 1,
    gridRow: '4',
  },
  {
    badge: 'SEO',
    title: 'How We Optimized Our SEO',
    image: false,
    gridColumn: 2,
    gridRow: '4',
  },
];

const OurWorkSection: React.FC = () => (
  <section className="ourwork">
    <div className="container">
      <div className="ourwork-inner">
        <div className="ourwork-left">
          <h2 className="ourwork-title">Some pieces of our work</h2>
          <p className="ourwork-desc">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          </p>
                      <Button variant="secondary" className="ourwork-btn">SHOW MORE</Button>
        </div>
        <div className="ourwork-grid">
          {projects.map((proj, idx) => (
            <div
              className={`ourwork-card${proj.image ? ' ourwork-card--withimg' : ''} ourwork-card--${idx + 1}`}
              key={proj.title + idx}
            >
              {proj.image && <div className="ourwork-img-placeholder" />}
              <div className="ourwork-badge">{proj.badge}</div>
              <h3 className="ourwork-card-title">{proj.title}</h3>
              <a className="ourwork-readmore" href="#">Read more <span className="ourwork-readmore-arrow">&#8594;</span></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurWorkSection; 