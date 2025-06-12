import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Braces, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Braces size={32} className="text-steel" />
            <span className="text-xl font-heading font-semibold">INNOTEVO</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              {t('nav.projects')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/archive" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              {t('nav.archive')}
            </NavLink>
          </nav>

          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-text hover:text-steel transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;