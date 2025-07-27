import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from './Button.tsx';
import DropdownArrow from './DropdownArrow.tsx';

// Константы для навигации
const NAVIGATION_ITEMS = {
  services: { href: '#services', label: 'Services' },
  resources: { href: '#resources', label: 'Resources' },
};

const COMPANY_ITEMS = [
  { href: '#about-us', label: 'About us', action: 'navigate' },
  { href: '#team', label: 'Team', action: 'close' },
  { href: '#careers', label: 'Careers', action: 'close' }
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Универсальная функция для обработки клика на Company
  const handleCompanyToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Для тачпадов и мобильных устройств используем принудительное переключение
    const isTouchDevice = !window.matchMedia('(hover: hover)').matches;
    
    setCompanyDropdownOpen(prev => !prev);
  }, [companyDropdownOpen]);

  // Универсальная функция для закрытия мобильного меню
  const handleMobileMenuClose = useCallback(() => {
    setMenuOpen(false);
    setCompanyDropdownOpen(false);
  }, []);

  // Универсальный обработчик для мобильных ссылок
  const handleMobileLinkClick = useCallback((action?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    handleMobileMenuClose();
    
    if (action === 'navigate') {
      navigate('/about');
      window.scrollTo(0, 0); // прокручиваем вверх страницы
    }
  }, [handleMobileMenuClose, navigate]);

  // Обработчик клика вне меню для его закрытия
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const isInsideDropdown = dropdownRef.current?.contains(target);
      const isInsideMobileMenu = mobileMenuRef.current?.contains(target);
      const isOnCompanyLink = target?.closest('a[href="#company"]');
      const isOnBurgerButton = target?.closest('.burger');
      const isOnMobileCompanyButton = target?.closest('.mobile-menu-link');
      
      // Если клик внутри мобильного меню, не закрываем ничего
      if (isInsideMobileMenu) {
        return;
      }
      
      // Закрываем dropdown если клик не внутри него и не на Company ссылку/кнопку
      if (!isInsideDropdown && !isOnCompanyLink && !isOnMobileCompanyButton) {
        setCompanyDropdownOpen(false);
      }
      
      // Закрываем мобильное меню если клик не внутри него и не на бургер
      if (menuOpen && !isOnBurgerButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Обработчик клика на логотип
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    handleMobileMenuClose();
  }, [navigate, handleMobileMenuClose]);

  // Обработчик для навигации на About
  const handleAboutClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCompanyDropdownOpen(false);
    navigate('/about');
    window.scrollTo(0, 0); // прокручиваем вверх страницы
  }, [navigate]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
            <img src="/img/logo.svg" alt="Shadient.co logo" className="logo-icon" height={40} />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li 
                className={`nav-item-with-dropdown${companyDropdownOpen ? ' dropdown-open' : ''}`}
                onMouseEnter={() => {
                  // Только для устройств с мышью (не тачпады)
                  if (window.matchMedia('(hover: hover)').matches) {
                    setCompanyDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  // Только для устройств с мышью (не тачпады)
                  if (window.matchMedia('(hover: hover)').matches) {
                    setCompanyDropdownOpen(false);
                  }
                }}
              >
                <a 
                  href="#company"
                  className={menuOpen && companyDropdownOpen ? 'active' : ''}
                  onClick={handleCompanyToggle}
                >
                  Company 
                  <DropdownArrow isOpen={companyDropdownOpen} />
                </a>
                {companyDropdownOpen && (
                  <div className="dropdown-menu" ref={dropdownRef}>
                    {COMPANY_ITEMS.map((item) => (
                      <a 
                        key={item.href}
                        href={item.href} 
                        className="dropdown-item" 
                        onClick={item.action === 'navigate' ? handleAboutClick : undefined}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => (
                <li key={key}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="nav-contact-btn">CONTACT</Button>
            <Button
              variant="close"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(open => !open)}
              className={`burger${menuOpen ? ' burger-open' : ''}`}
            >
              <div className="burger-icon">
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </div>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {menuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
  
          <ul className="mobile-menu-list">
            <li>
              <button className="mobile-menu-link" onClick={handleCompanyToggle}>
                Company
                <DropdownArrow isOpen={companyDropdownOpen} />
              </button>
              {companyDropdownOpen && (
                <ul className="mobile-dropdown-menu">
                  {COMPANY_ITEMS.map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href} 
                        className="mobile-dropdown-item" 
                        data-action={item.action}
                        onClick={handleMobileLinkClick(item.action)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => (
              <li key={key}>
                <a 
                  href={item.href} 
                  className={`mobile-menu-link${key === 'contact' ? ' mobile-contact-btn' : ''}`}
                  onClick={handleMobileLinkClick()}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 