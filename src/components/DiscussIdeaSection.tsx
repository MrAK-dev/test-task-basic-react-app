import React from 'react';
import './DiscussIdeaSection.css';
import Button from './Button.tsx';

const DiscussIdeaSection: React.FC = () => (
  <section className="discuss-idea-section">
    <div className="container">
      <div className="discuss-idea-box">
        <div className="discuss-idea-content">
          <h2 className="discuss-idea-title">Let’s discuss the idea</h2>
          <p className="discuss-idea-desc">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
          </p>
          <form className="discuss-idea-form" onSubmit={e => e.preventDefault()}>
            <input className="discuss-idea-input" type="email" placeholder="Your email" required />
            <Button variant="primary" type="submit" className="discuss-idea-send">SEND</Button>
          </form>
        </div>
      </div>
      <Button variant="secondary" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="discuss-idea-top">GO TO TOP</Button>
    </div>
  </section>
);

export default DiscussIdeaSection; 