import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3
      }} />
      
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.875rem',
            fontWeight: 500,
            display: 'inline-block',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            ✨ Organisation professionnelle en Normandie
          </div>
          
          <h1 style={{
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Organisez, Optimisez, 
            <span style={{
              background: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              Respirez
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Normandy Home Organiser vous accompagne dans l'organisation et le rangement de votre intérieur.<br />
            <strong style={{color: 'white'}}>Optimisation d'espace, tri, rangement, désencombrement</strong> : vivez dans un environnement serein et harmonieux.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'linear-gradient(135deg, #00b894 0%, #00a085 100%)',
                color: 'white',
                padding: '1.25rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: 'var(--border-radius)',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 184, 148, 0.3)',
                transition: 'all var(--transition-base)'
              }}>
                Recevoir un devis personnalisé
              </button>
            </Link>
            
            <Link to="/portfolio" style={{
              color: 'white',
              padding: '1.25rem 2rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 'var(--border-radius)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all var(--transition-base)',
              backdropFilter: 'blur(10px)',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              Voir le portfolio →
            </Link>
          </div>
          
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            gap: '2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.875rem'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#00b894', fontSize: '1.2rem'}}>✓</span>
              5 ans d'expérience
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#00b894', fontSize: '1.2rem'}}>✓</span>
              Accompagnement personnalisé
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#00b894', fontSize: '1.2rem'}}>✓</span>
              Résultats garantis
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--border-radius-xl)',
            padding: '2rem',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '320px',
              height: '240px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'rgba(255,255,255,0.7)'
            }}>
              🏠
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}