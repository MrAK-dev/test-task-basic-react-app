import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-main">
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <a href="#" className="footer-link">About us</a>
            <a href="#" className="footer-link">Team</a>
            <a href="#" className="footer-link">Careers</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <a href="#" className="footer-link">Branding</a>
            <a href="#" className="footer-link">Web development</a>
            <a href="#" className="footer-link">Digital marketing</a>
            <a href="#" className="footer-link">Mobile app</a>
            <a href="#" className="footer-link">SEO</a>
            <a href="#" className="footer-link">User testing</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Case study</a>
            <a href="#" className="footer-link">Testimonials</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Follow us</div>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Figma</a>
          </div>
        </div>
        <div className="footer-side">
          <div className="footer-logo-row">
            <img src="/img/logo.svg" alt="Shadient.co logo" className="footer-logo" aria-hidden="true" />
          </div>
          <div className="footer-updates">Get latest updates</div>
          <form className="footer-form" onSubmit={e => e.preventDefault()}>
            <input className="footer-input" type="email" placeholder="Your email" required />
          </form>
        </div>
      </div>
      <div className="footer-bottom">Created by Shadient.co</div>
    </div>
  </footer>
);

export default Footer; 