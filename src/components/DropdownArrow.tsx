import React from 'react';

interface DropdownArrowProps {
  isOpen: boolean;
}

const DropdownArrow: React.FC<DropdownArrowProps> = ({ isOpen }) => (
  <span className={`nav-arrow${isOpen ? ' rotated' : ''}`} aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

export default DropdownArrow; 