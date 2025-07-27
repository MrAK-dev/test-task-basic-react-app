import React from 'react';
import './WhyChooseUsSection.css';
import Button from './Button.tsx';

const WhyChooseUsSection: React.FC = () => (
  <section className="whychoose">
    <div className="container">
      <div className="whychoose-inner">
        <div className="whychoose-illustration">
          <img src="/img/whyChoose/00-whychoose.svg" alt="Why choose us illustration" />
        </div>
        <div className="whychoose-content">
          <h2 className="whychoose-title">Why choose us</h2>
          <p className="whychoose-desc">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
          </p>
          <Button variant="secondary" className="whychoose-btn">LET'S CONNECT</Button>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection; 