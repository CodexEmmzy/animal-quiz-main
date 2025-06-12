import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 animate-slide-up">
            {t('projects.title')}
          </h1>
          
          <p className="text-text-dark mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('projects.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-slide-up" 
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;