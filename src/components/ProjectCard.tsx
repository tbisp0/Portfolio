import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  details: string[];
  expanded: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, category, summary, details, expanded, onClick
}) => (
  <div className="project-card p-6 mb-8 animate-fade-in">
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-portfolio-blue-dark">
        {title}
      </h3>
      <span className="text-sm text-portfolio-gray-dark mb-4">
        {category}
      </span>
      <div className="mb-5">
        <p className="text-portfolio-gray-dark mb-4">🟢 <strong>Resumo:</strong> {summary}</p>
      </div>
      <button
        onClick={onClick}
        className="expand-button mb-2"
      >
        <span className="mr-2">🔎 Ver mais</span>
        <ArrowRight size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
      </button>
      {expanded && (
        <div className="mt-4 pl-5 border-l-2 border-portfolio-blue-light animate-fade-in">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-portfolio-gray-dark">
                – {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;
