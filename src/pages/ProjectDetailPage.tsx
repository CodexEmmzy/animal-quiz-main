import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjectById, Project } from '../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="container-custom mx-auto py-24 flex justify-center">
        <div className="animate-pulse bg-background-light h-96 w-full max-w-4xl rounded-lg"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container-custom mx-auto py-24 text-center">
        <h2 className="text-2xl font-heading mb-4">Project not found</h2>
        <Link to="/projects" className="text-steel hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <div className="container-custom mx-auto py-16 md:py-24">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-steel hover:text-steel-light transition-colors mb-8"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Projects
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 animate-slide-up">
            {project.title}
          </h1>
          
          <p className="text-xl text-text-light mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {project.summary}
          </p>
          
          {project.imageUrl && (
            <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-72 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="prose max-w-none text-text">
            <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-gray-800">Description</h2>
              <p className="text-text-light leading-relaxed mb-4">{project.description}</p>
            </section>
            
            <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-gray-800">Objectives</h2>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-gray-800">Elements</h2>
              <ul className="space-y-2">
                {project.elements.map((element, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>{element}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-gray-800">Scenarios</h2>
              <ul className="space-y-2">
                {project.scenarios.map((scenario, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>{scenario}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-gray-800">Extensions</h2>
              <ul className="space-y-2">
                {project.extensions.map((extension, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steel mr-2">•</span>
                    <span>{extension}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;