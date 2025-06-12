export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  objectives: string[];
  elements: string[];
  scenarios: string[];
  extensions: string[];
  imageUrl?: string;
  featured: boolean;
}

import projectsData from "./projects.json";

export const projects: Project[] = projectsData as Project[];

export const getFeaturedProject = (): Project | undefined => {
  return projects.find((project) => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
