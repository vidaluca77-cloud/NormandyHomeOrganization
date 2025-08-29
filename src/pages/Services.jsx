import React from 'react';

export default function Services() {
  const services = [
    {
      icon: '🏠',
      title: 'Organisation intérieure personnalisée',
      description: 'Transformation complète de vos espaces de vie selon vos besoins spécifiques',
      features: [
        'Audit détaillé de vos espaces',
        'Plan d\'organisation sur-mesure',
        'Mise en place des solutions',
        'Formation aux bonnes pratiques'
      ],
      duration: '1-3 jours',
      price: 'À partir de 250€'
    },
    {
      icon: '📐',
      title: 'Optimisation d\'espace',
      description: 'Maximisation de chaque mètre carré avec des solutions intelligentes',
      features: [
        'Analyse de l\'espace disponible',
        'Solutions de rangement créatives',
        'Réaménagement fonctionnel',
        'Conseils d\'aménagement'
      ],
      duration: '1-2 jours',
      price: 'À partir de 180€'
    },
    {
      icon: '🧹',
      title: 'Désencombrement et tri',
      description: 'Libération de vos espaces avec méthode et bienveillance',
      features: [
        'Tri méthodique par catégories',
        'Aide à la prise de décision',
        'Organisation du don/recyclage',
        'Nettoyage et réorganisation'
      ],
      duration: '2-4 heures',
      price: 'À partir de 120€'
    },
    {
      icon: '🤝',
      title: 'Accompagnement personnalisé',
      description: 'Suivi sur-mesure pour maintenir l\'organisation dans le temps',
      features: [
        'Séances de suivi régulières',
        'Conseils personnalisés',
        'Formation continue',
        'Support téléphonique'
      ],
      duration: 'Forfait mensuel',
      price: 'À partir de 80€/mois'
    },
    {
      icon: '📋',
      title: 'Conseil et formation',
      description: 'Apprentissage des méthodes d\'organisation pour une autonomie durable',
      features: [
        'Ateliers de formation',
        'Guides personnalisés',
        'Méthodes d\'organisation',
        'Suivi des progrès'
      ],
      duration: '2-3 heures',
      price: 'À partir de 90€'
    },
    {
      icon: '💼',
      title: 'Organisation professionnelle',
      description: 'Solutions d\'organisation pour bureaux et espaces professionnels',
      features: [
        'Audit des espaces de travail',
        'Optimisation des flux',
        'Formation des équipes',
        'Solutions de rangement pro'
      ],
      duration: '1-2 jours',
      price: 'Sur devis'
    }
  ];

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
            ✨ Services professionnels
          </div>
          
          <h1 style={{
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Nos services d'organisation
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Des solutions complètes et personnalisées pour transformer vos espaces et votre quotidien.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{
        background: 'var(--color-surface)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-base)'
              }}>
                {/* Header */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                  padding: '1.5rem',
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    margin: 0,
                    color: 'white',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    opacity: 0.9,
                    fontSize: '0.95rem'
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Content */}
                <div style={{
                  padding: '1.5rem'
                }}>
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                      color: 'var(--color-text)'
                    }}>
                      Prestations incluses :
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                          color: 'var(--color-text-light)',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{ color: 'var(--color-accent)' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border)'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-text-light)',
                        marginBottom: '0.25rem'
                      }}>
                        Durée: {service.duration}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--color-accent)'
                      }}>
                        {service.price}
                      </div>
                    </div>
                    <a href="/contact" style={{
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: 'var(--border-radius)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'all var(--transition-base)'
                    }}>
                      Demander un devis
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Notre processus
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Comment nous procédons
            </h2>
            
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--color-text-light)',
              fontSize: '1.1rem'
            }}>
              Une méthode éprouvée en 4 étapes pour des résultats durables et personnalisés.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Évaluation de vos besoins, contraintes et objectifs lors d\'un premier rendez-vous.'
              },
              {
                step: '02',
                title: 'Planification',
                description: 'Conception d\'un plan d\'action personnalisé avec timeline et budget détaillé.'
              },
              {
                step: '03',
                title: 'Réalisation',
                description: 'Mise en œuvre des solutions avec votre participation active et bienveillante.'
              },
              {
                step: '04',
                title: 'Suivi',
                description: 'Accompagnement post-intervention pour maintenir l\'organisation dans le temps.'
              }
            ].map((process, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--color-border)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  margin: '0 auto 1.5rem'
                }}>
                  {process.step}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {process.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {process.description}
                </p>
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
            Prêt(e) à transformer vos espaces ?
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Contactez-nous pour un devis personnalisé et gratuit. Premier rendez-vous sans engagement.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" style={{
              background: 'linear-gradient(135deg, #00b894 0%, #00a085 100%)',
              color: 'white',
              padding: '1.25rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: 600,
              borderRadius: 'var(--border-radius)',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(0, 184, 148, 0.3)',
              transition: 'all var(--transition-base)'
            }}>
              Demander un devis
            </a>
            
            <a href="/portfolio" style={{
              color: 'white',
              padding: '1.25rem 2rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 'var(--border-radius)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all var(--transition-base)',
              backdropFilter: 'blur(10px)'
            }}>
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>
    </>
  );
}