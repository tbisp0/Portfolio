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
          <div className="mt-4 pl-5 border-l-2 border-portfolio-blue-light animate-fade-in space-y-4">
            {[
              { key: "overview", value: overview },
              { key: "discovery", value: discovery },
              { key: "solution", value: solution },
              { key: "iteration", value: iteration },
              { key: "outcomes", value: outcomes },
              { key: "insights", value: insights },
            ].map(
              (section) =>
                section.value && (
                  <div key={section.key} className="mb-4">
                    <h4 className="heading-3">{sectionTitles[section.key]}</h4>
                    {section.key === "outcomes" && Array.isArray(section.value) ? (
                      <ul className="list-disc ml-5 paragraph">
                        {section.value.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="paragraph">{section.value}</p>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
