import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '3rem 0 2rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem'
              }}>
                NHO
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  color: 'white'
                }}>
                  Normandy Home Organiser
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Organisation professionnelle
                </div>
              </div>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Transformez votre intérieur en un espace organisé, fonctionnel et harmonieux. 
              Accompagnement professionnel en Normandie.
            </p>
          </div>
          
          <div>
            <h4 style={{
              color: 'white',
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: 600
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                'Organisation intérieure',
                'Optimisation d\'espace',
                'Désencombrement',
                'Accompagnement personnalisé',
                'Conseils & formation'
              ].map((service, index) => (
                <li key={index} style={{
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    transition: 'color var(--transition-fast)'
                  }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{
              color: 'white',
              marginBottom: '1.5rem',
              fontSize: '1.2rem',
              fontWeight: 600
            }}>
              Contact
            </h4>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <span style={{fontSize: '1.2rem'}}>📍</span>
                <span>Normandie, France</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <span style={{fontSize: '1.2rem'}}>📞</span>
                <a href="#contact" style={{
                  color: 'var(--color-accent-light)',
                  textDecoration: 'none'
                }}>
                  Demander un devis
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{fontSize: '1.2rem'}}>⏰</span>
                <span>Lun-Ven : 9h-18h</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem'
          }}>
            © {new Date().getFullYear()} Normandy Home Organiser — Lucie, Home organiser en Normandie.
          </div>
          
          <div style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>Site réalisé avec</span>
            <span style={{color: '#e74c3c', fontSize: '1rem'}}>❤️</span>
            <span>et professionnalisme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}