import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();
  
  return (
    <div className="project-card animate-fade-in">
      {project.imageUrl && (
        <div className="mb-4 overflow-hidden rounded-md h-48">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <h3 className="text-xl font-heading mb-2">{project.title}</h3>
      <p className="text-text-dark mb-4">{project.summary}</p>
      
      <Link 
        to={`/projects/${project.id}`} 
        className="btn btn-outline"
      >
        {t('project.readStructure')}
      </Link>
    </div>
  );
};

export default ProjectCard;