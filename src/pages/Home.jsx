import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      
      {/* Quick Services Preview */}
      <section className="section" style={{
        background: 'var(--color-surface)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Nos Services
          </div>
          
          <h2 style={{
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Solutions complètes d'organisation
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: '🏠',
                title: 'Organisation intérieure',
                description: 'Réorganisation complète de vos espaces de vie pour une fonctionnalité optimale.',
                link: '/services'
              },
              {
                icon: '📐',
                title: 'Optimisation d\'espace',
                description: 'Maximisation de chaque mètre carré avec des solutions sur-mesure.',
                link: '/services'
              },
              {
                icon: '🧹',
                title: 'Désencombrement',
                description: 'Tri méthodique et accompagnement pour libérer vos espaces.',
                link: '/services'
              }
            ].map((service, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-base)',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <Link to={service.link} style={{
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}>
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
          
          <Link to="/services" style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            fontWeight: 500,
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-base)',
            display: 'inline-block'
          }}>
            Découvrir tous nos services
          </Link>
        </div>
      </section>
    </>
  );
}