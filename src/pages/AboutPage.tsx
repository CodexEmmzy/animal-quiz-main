
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-8 animate-slide-up">
            {t('about.title')}
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                INNOTEVO is a think tank focused on innovation through structured thinking and methodical approaches. 
                We work at the intersection of theoretical frameworks and practical implementation, creating systems 
                and methodologies that bring order to complexity.
              </p>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-heading mb-4 mt-12">Our Philosophy</h2>
                <p className="mb-6">
                  At the core of our work is the belief that innovation emerges from structured thinking and methodical exploration. 
                  We reject the notion that creativity must be chaotic. Instead, we embrace the power of ordered systems 
                  and clear frameworks to generate meaningful innovation.
                </p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-heading mb-4 mt-12">Our Approach</h2>
                <p className="mb-6">
                  We develop frameworks and methodologies that can be applied across diverse domains, from ecological 
                  design to organizational structure. Our work is characterized by:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>Systematic analysis of complex systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>Development of structured frameworks that balance theory and practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>Creation of scalable methodologies that can adapt to different contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>Integration of interdisciplinary insights to solve complex problems</span>
                  </li>
                </ul>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-heading mb-4 mt-12">Our Work</h2>
                <p className="mb-6">
                  Our projects span multiple domains but share a common thread: the application of structured thinking 
                  to complex problems. From ecological systems design to organizational frameworks, our work brings 
                  clarity to complexity and order to chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <ContactForm />
      </section>
    </div>
  );
};

export default AboutPage;