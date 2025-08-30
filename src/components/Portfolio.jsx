import React, { useState } from 'react';

const works = [
  {
    before: '/assets/portfolio/before1.jpg',
    after: '/assets/portfolio/after1.jpg',
    description: 'Transformation d\'un garde-manger encombré en espace organisé avec système d\'étiquetage.',
    title: 'Organisation de garde-manger',
    category: 'Espace fonctionnel'
  },
  {
    before: '/assets/portfolio/before2.jpg',
    after: '/assets/portfolio/after2.jpg',
    description: 'Réaménagement d\'un grenier de stockage en bureau moderne et fonctionnel.',
    title: 'Transformation de grenier',
    category: 'Espace de travail'
  },
  {
    before: '/assets/portfolio/before3.jpg',
    after: '/assets/portfolio/after3.jpg',
    description: 'Conversion d\'un bureau en chambre de bébé chaleureuse et organisée.',
    title: 'Chambre de bébé',
    category: 'Espace privé'
  }
];

export default function Portfolio() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="section" id="portfolio" style={{
      background: 'var(--color-surface)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
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
            Nos réalisations
          </div>
          
          <h2 style={{
            marginBottom: '1rem',
            color: 'var(--color-text)'
          }}>
            Portfolio avant / après
          </h2>
          
          <p style={{
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--color-text-light)'
          }}>
            Découvrez quelques-unes de nos transformations les plus spectaculaires. 
            Chaque projet est unique et adapté aux besoins spécifiques de nos clients.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {works.map((work, idx) => (
            <div key={idx} className="card" style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              transition: 'all var(--transition-base)',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '1.5rem 1.5rem 0.5rem',
                color: 'white'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  opacity: 0.9,
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>{work.category}</div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  margin: 0,
                  color: 'white',
                  fontWeight: 600
                }}>{work.title}</h3>
              </div>
              
              <div style={{
                position: 'relative',
                background: '#f8fafc',
                padding: '1.5rem'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#dc2626',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      marginBottom: '0.75rem'
                    }}>
                      ❌ Avant
                    </div>
                    <div style={{
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      aspectRatio: '4/3',
                      backgroundImage: `url(${work.before})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        background: 'rgba(239, 68, 68, 0.9)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        ❌ Avant
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      color: '#16a34a',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      marginBottom: '0.75rem'
                    }}>
                      ✅ Après
                    </div>
                    <div style={{
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      aspectRatio: '4/3',
                      backgroundImage: `url(${work.after})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        background: 'rgba(34, 197, 94, 0.9)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        ✅ Après
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  background: 'var(--color-surface)',
                  padding: '1.5rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--color-border)'
                }}>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    margin: 0,
                    lineHeight: 1.6,
                    fontWeight: 500
                  }}>
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div style={{
            fontSize: '2.5rem',
            marginBottom: '1rem'
          }}>🌟</div>
          
          <h3 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Prêt(e) pour votre transformation ?
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Chaque espace a son potentiel. Découvrons ensemble comment optimiser le vôtre 
            pour créer un environnement qui vous ressemble.
          </p>
          
          <a href="#contact" style={{textDecoration: 'none'}}>
            <button style={{
              background: 'var(--color-surface)',
              color: 'var(--color-accent)',
              padding: '1.25rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-lg)',
              transition: 'all var(--transition-base)'
            }}>
              Demander mon devis gratuit
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}