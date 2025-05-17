import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  overview: string;
  discovery: string;
  solution: string;
  iteration: string;
  outcomes: string[];
  insights: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, category, overview, discovery, solution, iteration, outcomes, insights
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card p-6 mb-8 animate-fade-in">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-portfolio-blue-dark">{title}</h3>
        <span className="text-sm text-portfolio-gray-dark mb-4">{category}</span>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="expand-button mb-2"
        >
          <span className="mr-2">Ver mais</span>
          <ArrowRight size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
        </button>
        {expanded && (
          <div className="mt-4 pl-5 border-l-2 border-portfolio-blue-light animate-fade-in space-y-4">
            <div>
              <h4 className="font-medium">Overview</h4>
              <p>{overview}</p>
            </div>
            <div>
              <h4 className="font-medium">Discovery</h4>
              <p>{discovery}</p>
            </div>
            <div>
              <h4 className="font-medium">Solution</h4>
              <p>{solution}</p>
            </div>
            <div>
              <h4 className="font-medium">Iteration</h4>
              <p>{iteration}</p>
            </div>
            <div>
              <h4 className="font-medium">Outcomes</h4>
              <ul className="list-disc pl-5">
                {outcomes && outcomes.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Insights</h4>
              <p>{insights}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
