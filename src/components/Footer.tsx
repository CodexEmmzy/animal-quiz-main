import React from 'react';
import { Link } from 'react-router-dom';
import { Braces } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background-light py-12">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Braces size={28} className="text-steel" />
              <span className="text-lg font-heading font-semibold">INNOTEVO</span>
            </Link>
            <p className="text-text-dark max-w-xs">
              {t('home.intro')}
            </p>
          </div>
          
          <div className="md:col-span-2 md:pl-8 md:border-l border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-text-light font-heading text-lg mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-text-dark hover:text-steel transition-colors">
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="text-text-dark hover:text-steel transition-colors">
                      {t('nav.projects')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-text-dark hover:text-steel transition-colors">
                      {t('nav.about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/archive" className="text-text-dark hover:text-steel transition-colors">
                      {t('nav.archive')}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-text-light font-heading text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contact" className="text-text-dark hover:text-steel transition-colors">
                      {t('footer.contact')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/imprint" className="text-text-dark hover:text-steel transition-colors">
                      {t('footer.imprint')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-text-dark hover:text-steel transition-colors">
                      {t('footer.privacy')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-text-dark text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;