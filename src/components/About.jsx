import React from 'react';

export default function About() {
  return (
    <section className="section" id="about" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        alignItems: 'center',
        maxWidth: '1200px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '6rem',
            color: 'white',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '8rem',
              opacity: 0.7
            }}>
              👩‍💼
            </div>
          </div>
          
          <div className="card" style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.5rem'
            }}>🏆</div>
            <div style={{
              fontWeight: 600,
              color: 'var(--color-accent)',
              fontSize: '1.5rem',
              marginBottom: '0.5rem'
            }}>5 ans</div>
            <div style={{
              color: 'var(--color-text-light)',
              fontSize: '0.9rem'
            }}>d'expérience professionnelle</div>
          </div>
        </div>
        
        <div>
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
            À propos
          </div>
          
          <h2 style={{
            marginBottom: '2rem',
            color: 'var(--color-text)'
          }}>
            Bonjour ! Je suis Lucie, fondatrice de Normandy Home Organiser.
          </h2>
          
          <div style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            color: 'var(--color-text-light)'
          }}>
            <p style={{marginBottom: '1.5rem'}}>
              Avec <strong style={{color: 'var(--color-accent)'}}>5 ans d'expérience professionnelle</strong> auprès de clients particuliers et professionnels, j'ai pu transformer des dizaines d'espaces encombrés en véritables havres de paix.
            </p>
            
            <p style={{marginBottom: '1.5rem'}}>
              Passionnée d'organisation et de rangement depuis l'enfance, j'ai affiné des méthodes efficaces et bienveillantes pour vous accompagner dans la réorganisation de votre intérieur.
            </p>
            
            <div style={{
              background: 'var(--color-surface)',
              padding: '1.5rem',
              borderRadius: 'var(--border-radius)',
              border: '1px solid var(--color-border)',
              marginBottom: '2rem'
            }}>
              <div style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: '1.1rem',
                marginBottom: '0.5rem'
              }}>
                🎯 Mon objectif :
              </div>
              <p style={{margin: 0, color: 'var(--color-text)'}}>
                Vous aider à retrouver sérénité, gain de temps et plaisir dans votre espace de vie.
              </p>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: 'var(--color-text)'
            }}>
              Mes compétences
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { icon: '🏠', title: 'Organisation intérieure personnalisée', desc: 'Solutions sur-mesure adaptées à votre mode de vie' },
                { icon: '📐', title: 'Optimisation de l\'espace', desc: 'Maximiser chaque m² de votre intérieur' },
                { icon: '🧹', title: 'Tri, désencombrement, rangement', desc: 'Méthodes efficaces et durables' },
                { icon: '🤝', title: 'Accompagnement humain et discret', desc: 'Approche bienveillante et respectueuse' },
                { icon: '📋', title: 'Conseils et suivi sur-mesure', desc: 'Support continu pour maintenir l\'organisation' }
              ].map((skill, index) => (
                <div key={index} style={{
                  background: 'var(--color-surface)',
                  padding: '1.5rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--color-border)',
                  transition: 'all var(--transition-base)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem'
                  }}>{skill.icon}</div>
                  <div style={{
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>{skill.title}</div>
                  <div style={{
                    color: 'var(--color-text-light)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}>{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}