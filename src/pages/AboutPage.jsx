import React from 'react';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '6rem 0 4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
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
            ✨ À propos de Normandy Home Organiser
          </div>
          
          <h1 style={{
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Votre experte en organisation
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Découvrez mon parcours, ma philosophie et mon approche personnalisée pour transformer vos espaces.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Detailed Story Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
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
                Mon histoire
              </div>
              
              <h2 style={{
                marginBottom: '2rem',
                color: 'var(--color-text)'
              }}>
                D'une passion à une vocation
              </h2>
              
              <div style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--color-text-light)'
              }}>
                <p style={{marginBottom: '1.5rem'}}>
                  Depuis mon enfance, j'ai toujours été fascinée par l'organisation et l'optimisation des espaces. Cette passion naturelle m'a amenée à développer des méthodes uniques et efficaces au fil des années.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  Après avoir aidé famille et amis à transformer leurs intérieurs, j'ai décidé en 2019 de faire de cette passion mon métier. Aujourd'hui, forte de <strong style={{color: 'var(--color-accent)'}}>plus de 100 projets réalisés</strong>, je continue à accompagner particuliers et professionnels dans leur quête d'un espace de vie harmonieux.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  Ma philosophie ? <em>Chaque espace a son potentiel, chaque client a ses besoins spécifiques.</em> C'est pourquoi j'adapte toujours mes méthodes à votre mode de vie, vos contraintes et vos objectifs.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--border-radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                borderRadius: 'var(--border-radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'var(--color-accent)',
                marginBottom: '1.5rem'
              }}>
                👩‍💼
              </div>
              <div style={{
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)'
                }}>
                  Lucie Martin
                </h3>
                <p style={{
                  color: 'var(--color-text-light)',
                  fontSize: '0.95rem',
                  marginBottom: '1rem'
                }}>
                  Fondatrice & Home Organiser Certifiée
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  display: 'inline-block'
                }}>
                  5 ans d'expérience • 100+ projets
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{
        background: 'var(--color-surface)'
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
              Mes valeurs
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Une approche humaine et professionnelle
            </h2>
            
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--color-text-light)',
              fontSize: '1.1rem'
            }}>
              Des principes qui guident chaque intervention pour votre satisfaction et votre bien-être.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🤝',
                title: 'Bienveillance',
                description: 'Accompagnement sans jugement, dans le respect de vos habitudes et de votre rythme de vie.'
              },
              {
                icon: '🔒',
                title: 'Discrétion',
                description: 'Confidentialité absolue et respect de votre intimité lors de chaque intervention.'
              },
              {
                icon: '⚡',
                title: 'Efficacité',
                description: 'Méthodes éprouvées et solutions durables pour des résultats visibles immédiatement.'
              },
              {
                icon: '🎯',
                title: 'Personnalisation',
                description: 'Chaque solution est unique et adaptée à vos besoins, contraintes et objectifs spécifiques.'
              },
              {
                icon: '📚',
                title: 'Pédagogie',
                description: 'Transmission des bonnes pratiques pour maintenir l\'organisation dans le temps.'
              },
              {
                icon: '♻️',
                title: 'Responsabilité',
                description: 'Approche éco-responsable avec valorisation des objets par le don ou le recyclage.'
              }
            ].map((value, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
                transition: 'all var(--transition-base)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Formation */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
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
              Formations & Certifications
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Une expertise reconnue
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                year: '2019',
                title: 'Certification Home Organiser',
                institution: 'Institut International d\'Organisation',
                description: 'Formation complète aux méthodes d\'organisation et d\'optimisation d\'espace.'
              },
              {
                year: '2020',
                title: 'Formation Feng Shui',
                institution: 'École Française de Feng Shui',
                description: 'Approche holistique de l\'aménagement pour un bien-être optimal.'
              },
              {
                year: '2021',
                title: 'Certification Accompagnement',
                institution: 'Centre de Formation Professionnelle',
                description: 'Techniques d\'accompagnement bienveillant et de coaching en organisation.'
              },
              {
                year: '2023',
                title: 'Formation continue',
                institution: 'Diverses institutions',
                description: 'Mise à jour des méthodes et découverte de nouvelles approches d\'organisation.'
              }
            ].map((cert, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--border-radius)',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    {cert.year}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)'
                }}>
                  {cert.title}
                </h3>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-accent)',
                  fontWeight: 500,
                  marginBottom: '0.75rem'
                }}>
                  {cert.institution}
                </div>
                <p style={{
                  color: 'var(--color-text-light)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{
        background: 'var(--color-surface)'
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
              Témoignages
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Ce que disent mes clients
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Marie L.',
                location: 'Caen',
                text: 'Lucie a transformé notre maison ! Son approche bienveillante et ses conseils pratiques ont fait toute la différence. Nous respirons enfin chez nous.',
                rating: 5
              },
              {
                name: 'Thomas R.',
                location: 'Rouen',
                text: 'Intervention professionnelle et discrète. Lucie a su optimiser notre petit appartement de manière remarquable. Je recommande vivement !',
                rating: 5
              },
              {
                name: 'Sophie M.',
                location: 'Le Havre',
                text: 'Un accompagnement sur-mesure exceptionnel. Lucie a non seulement organisé nos espaces mais nous a aussi appris à maintenir cette organisation.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)'
                  }}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            color: 'white',
            marginBottom: '1rem'
          }}>
            Parlons de votre projet
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Contactez-moi pour échanger sur vos besoins et découvrir comment je peux vous accompagner.
          </p>
          
          <a href="/contact" style={{
            background: 'linear-gradient(135deg, #00b894 0%, #00a085 100%)',
            color: 'white',
            padding: '1.25rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: 600,
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(0, 184, 148, 0.3)',
            transition: 'all var(--transition-base)',
            display: 'inline-block'
          }}>
            Prendre contact
          </a>
        </div>
      </section>
    </>
  );
}