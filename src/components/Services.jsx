import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Layout, Server, Database, Wrench, Smartphone, ArrowRight } from 'lucide-react';

const serviceIcons = {
  Layers: <Layers size={24} />,
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  Database: <Database size={24} />,
  Wrench: <Wrench size={24} />,
  Smartphone: <Smartphone size={24} />
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">Client & Engineering Services</h2>
          <p className="section-subtitle">
            Reliable, collaborative solutions tailored for businesses, startups, and institutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div>
                <div className="service-icon-wrap">
                  {serviceIcons[service.icon] || <Layers size={24} />}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>

              <div>
                <div className="service-tags">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
