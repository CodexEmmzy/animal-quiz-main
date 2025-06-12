import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProject } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featuredProject = getFeaturedProject();

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-8 animate-slide-up">
            {t('home.title')}
          </h1>
          
          <div className="max-w-3xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
              {t('home.intro')}
            </p>
          </div>
        </div>
      </section>
      
      {featuredProject && (
        <section className="py-16 bg-background-light">
          <div className="container-custom mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 animate-slide-up">
              {t('home.featured')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="rounded-lg overflow-hidden">
                  {featuredProject.imageUrl && (
                    <img 
                      src={featuredProject.imageUrl} 
                      alt={featuredProject.title} 
                      className="w-full h-96 object-cover"
                    />
                  )}
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-heading mb-4">{featuredProject.title}</h3>
                <p className="text-text-light mb-4">{featuredProject.summary}</p>
                <p className="text-text-dark mb-6">{featuredProject.description}</p>
                
                <Link 
                  to={`/projects/${featuredProject.id}`} 
                  className="btn btn-primary"
                >
                  {t('project.readStructure')}
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link 
                to="/projects" 
                className="inline-flex items-center text-steel hover:text-steel-light transition-colors"
              >
                {t('home.viewAll')}
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;