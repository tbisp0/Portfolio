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

const sectionTitles: Record<string, string> = {
  overview: "Visão Geral",
  discovery: "Descoberta",
  solution: "Solução",
  iteration: "Iteração",
  outcomes: "Resultados",
  insights: "Insights",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, category, overview, discovery, solution, iteration, outcomes, insights
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card p-6 mb-8 animate-fade-in" style={{ background: "var(--color-card-bg)" }}>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold" style={{ color: "var(--color-primary)" }}>{title}</h3>
        <span className="text-sm" style={{ color: "var(--color-muted)" }}>{category}</span>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="expand-button mb-2"
        >
          <span className="mr-2">Ver mais</span>
          <ArrowRight
            size={28}
            className={`w-8 h-8 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
          />
        </button>
        {expanded && (
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-6">
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.overview}</h4>
              <p className="paragraph">{overview}</p>
            </div>
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.discovery}</h4>
              <p className="paragraph">{discovery}</p>
            </div>
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.solution}</h4>
              <p className="paragraph">{solution}</p>
            </div>
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.iteration}</h4>
              <p className="paragraph">{iteration}</p>
            </div>
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.outcomes}</h4>
              <ul className="list-disc pl-5 paragraph">
                {Array.isArray(outcomes) ? outcomes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                )) : null}
              </ul>
            </div>
            <div>
              <h4 className="heading-3 mb-2">{sectionTitles.insights}</h4>
              <p className="paragraph">{insights}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
