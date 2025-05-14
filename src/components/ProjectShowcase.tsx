import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

interface ProjectDetails {
  title: string;
  category: string;
  imageUrl: string;
  summary: string;
  details: string[];
}

interface ProjectShowcaseProps {
  projects: ProjectDetails[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-4xl font-bold text-portfolio-blue-dark mb-2">Projetos</h2>
      <div className="h-1 w-20 bg-portfolio-blue mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            summary={project.summary}
            details={project.details}
            expanded={activeIndex === idx}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
