import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  Terminal, 
  Zap, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Monitor, 
  UploadCloud, 
  CheckSquare, 
  Smartphone, 
  FileCode, 
  Grid, 
  Layout 
} from 'lucide-react';

const iconMap = {
  Code: <Code size={18} />,
  FileCode: <FileCode size={18} />,
  Layout: <Layout size={18} />,
  Grid: <Grid size={18} />,
  Smartphone: <Smartphone size={18} />,
  Terminal: <Terminal size={18} />,
  Server: <Server size={18} />,
  Zap: <Zap size={18} />,
  Layers: <Layers size={18} />,
  Database: <Database size={18} />,
  Cloud: <Cloud size={18} />,
  Cpu: <Cpu size={18} />,
  GitBranch: <GitBranch size={18} />,
  Monitor: <Monitor size={18} />,
  UploadCloud: <UploadCloud size={18} />,
  CheckSquare: <CheckSquare size={18} />
};

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layout size={22} />,
      items: skills.frontend
    },
    {
      title: "Backend & REST APIs",
      icon: <Server size={22} />,
      items: skills.backend
    },
    {
      title: "Databases & BaaS",
      icon: <Database size={22} />,
      items: skills.database
    },
    {
      title: "DevOps & Workflow",
      icon: <Wrench size={22} />,
      items: skills.tools
    }
  ];

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Toolkit</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A battle-tested stack for developing responsive frontends, robust REST APIs, and production deployments.
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="category-title">
                {cat.icon}
                <span>{cat.title}</span>
              </h3>

              <div className="skills-list">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <div className="skill-name-wrap">
                      <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                        {iconMap[skill.icon] || <Code size={18} />}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
