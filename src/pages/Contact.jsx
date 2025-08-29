import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
            ✨ Contactez-nous
          </div>
          
          <h1 style={{
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Parlons de votre projet
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Première consultation gratuite et sans engagement. Échangeons sur vos besoins et découvrons ensemble le potentiel de vos espaces.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                icon: '📞',
                title: 'Téléphone',
                info: 'Appelez-nous directement',
                detail: 'Du lundi au vendredi, 9h-18h',
                action: 'Cliquez pour appeler',
                link: 'tel:+33234567890'
              },
              {
                icon: '📧',
                title: 'Email',
                info: 'contact@normandyhomeorganiser.fr',
                detail: 'Réponse sous 24h maximum',
                action: 'Envoyer un email',
                link: 'mailto:contact@normandyhomeorganiser.fr'
              },
              {
                icon: '📍',
                title: 'Zone d\'intervention',
                info: 'Normandie & régions limitrophes',
                detail: 'Déplacements inclus dans un rayon de 50km',
                action: 'Voir la carte',
                link: '#zone'
              },
              {
                icon: '⏰',
                title: 'Disponibilité',
                info: 'Intervention 7j/7',
                detail: 'Week-end et soirées possibles',
                action: 'Planifier un créneau',
                link: '#contact'
              }
            ].map((contact, index) => (
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
                  {contact.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)'
                }}>
                  {contact.title}
                </h3>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-accent)',
                  marginBottom: '0.5rem'
                }}>
                  {contact.info}
                </div>
                <p style={{
                  color: 'var(--color-text-light)',
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem'
                }}>
                  {contact.detail}
                </p>
                <a 
                  href={contact.link}
                  style={{
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {contact.action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
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
              Questions fréquentes
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Vos questions, nos réponses
            </h2>
            
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--color-text-light)',
              fontSize: '1.1rem'
            }}>
              Retrouvez les réponses aux questions les plus fréquemment posées par nos clients.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                question: 'Combien coûte une prestation d\'organisation ?',
                answer: 'Nos tarifs varient selon la complexité et la durée du projet. Une consultation gratuite nous permet d\'établir un devis personnalisé. Comptez généralement entre 150€ et 400€ selon la prestation.'
              },
              {
                question: 'Combien de temps dure une intervention ?',
                answer: 'La durée dépend de l\'espace à organiser et du niveau d\'encombrement. Une chambre peut être organisée en une demi-journée, tandis qu\'une maison complète peut nécessiter 2-3 jours.'
              },
              {
                question: 'Dois-je être présent(e) pendant l\'intervention ?',
                answer: 'Votre présence est recommandée, surtout pour les décisions de tri. Nous nous adaptons cependant à vos contraintes et pouvons intervenir en autonomie sur certaines tâches.'
              },
              {
                question: 'Que faites-vous des objets dont je ne veux plus ?',
                answer: 'Nous vous accompagnons dans le tri et vous conseillons sur les options : don à des associations, vente, recyclage ou mise en déchetterie. Nous pouvons nous charger des démarches.'
              },
              {
                question: 'Intervenez-vous aussi en entreprise ?',
                answer: 'Oui, nous proposons des services d\'organisation pour bureaux, espaces de travail et locaux professionnels. Devis sur mesure selon vos besoins spécifiques.'
              },
              {
                question: 'Comment maintenir l\'organisation dans le temps ?',
                answer: 'Nous vous formons aux bonnes pratiques et proposons un suivi personnalisé. Des séances de rappel peuvent être programmées pour maintenir l\'organisation durablement.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  color: 'var(--color-text)',
                  fontWeight: 600
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="section" style={{
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
              Zone d'intervention
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Où intervenons-nous ?
            </h2>
            
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--color-text-light)',
              fontSize: '1.1rem'
            }}>
              Nous intervenons principalement en Normandie et dans les régions limitrophes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'var(--color-text)'
              }}>
                Villes principales d'intervention
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                {[
                  'Caen', 'Rouen', 'Le Havre', 'Cherbourg',
                  'Évreux', 'Lisieux', 'Bayeux', 'Honfleur',
                  'Deauville', 'Cabourg', 'Falaise', 'Vire'
                ].map((city, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <span style={{ color: 'var(--color-accent)' }}>📍</span>
                    <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{city}</span>
                  </div>
                ))}
              </div>
              
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--color-surface)',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-border)'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  Informations pratiques
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: 'var(--color-text-light)'
                  }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    Déplacements inclus dans un rayon de 50km
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: 'var(--color-text-light)'
                  }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    Supplément kilométrique au-delà
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: 'var(--color-text-light)'
                  }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    Interventions possibles en soirée et week-end
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-text-light)'
                  }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    Consultation téléphonique gratuite
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--border-radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                borderRadius: 'var(--border-radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '4rem',
                color: 'var(--color-accent)'
              }}>
                🗺️
              </div>
              <h4 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: 'var(--color-text)'
              }}>
                Votre ville n'apparaît pas ?
              </h4>
              <p style={{
                color: 'var(--color-text-light)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Contactez-nous ! Nous étudions toutes les demandes et pouvons nous déplacer plus loin selon le projet.
              </p>
              <a href="#contact" style={{
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
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              Déroulement
            </div>
            
            <h2 style={{
              marginBottom: '1rem',
              color: 'var(--color-text)'
            }}>
              Comment ça se passe ?
            </h2>
            
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--color-text-light)',
              fontSize: '1.1rem'
            }}>
              Du premier contact à la livraison de votre espace transformé, découvrez notre processus en 4 étapes.
            </p>
          </div>

          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--color-border)',
              transform: 'translateX(-50%)'
            }} />

            {[
              {
                step: '1',
                title: 'Premier contact',
                description: 'Appelez-nous ou remplissez notre formulaire. Nous échangeons sur vos besoins et planifions une consultation gratuite.',
                duration: 'Immédiat'
              },
              {
                step: '2',
                title: 'Consultation à domicile',
                description: 'Visite gratuite de vos espaces, évaluation des besoins, définition des objectifs et remise d\'un devis détaillé.',
                duration: '1h - Gratuit'
              },
              {
                step: '3',
                title: 'Planification',
                description: 'Validation du devis, planification de l\'intervention selon vos disponibilités et préparation du matériel nécessaire.',
                duration: '2-3 jours'
              },
              {
                step: '4',
                title: 'Transformation',
                description: 'Intervention sur site, tri, réorganisation et formation aux bonnes pratiques pour maintenir l\'organisation.',
                duration: 'Selon projet'
              }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '3rem',
                ...(index % 2 === 0 ? 
                  { justifyContent: 'flex-end', paddingRight: '3rem' } : 
                  { justifyContent: 'flex-start', paddingLeft: '3rem' })
              }}>
                <div style={{
                  background: 'var(--color-surface)',
                  padding: '2rem',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  maxWidth: '350px',
                  position: 'relative'
                }}>
                  {/* Step number circle */}
                  <div style={{
                    position: 'absolute',
                    ...(index % 2 === 0 ? { right: '-60px' } : { left: '-60px' }),
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    {item.step}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text)'
                  }}>
                    {item.title}
                  </h3>
                  
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-accent)',
                    fontWeight: 500,
                    marginBottom: '1rem'
                  }}>
                    {item.duration}
                  </div>
                  
                  <p style={{
                    color: 'var(--color-text-light)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}