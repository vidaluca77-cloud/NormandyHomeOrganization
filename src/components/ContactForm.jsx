import React, { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      setSent(true);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  }

  return (
    <section className="section" id="contact" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />
      
      <div className="container" style={{
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
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
              📞 Prenons contact
            </div>
            
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Demande de devis gratuit
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Parlons de votre projet ! Décrivez-moi vos besoins et je vous proposerai 
              une solution personnalisée adaptée à votre espace et votre budget.
            </p>
          </div>

          {!sent ? (
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'var(--border-radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <form onSubmit={handleSubmit} name="contact" method="POST" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" style={{display: 'none'}} />
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      fontSize: '1rem'
                    }}>
                      Prénom & Nom *
                    </label>
                    <input 
                      type="text" 
                      name="nom" 
                      required 
                      placeholder="Ex: Marie Dupont"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid var(--color-border)',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        background: 'var(--color-surface)',
                        transition: 'all var(--transition-fast)',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                      fontSize: '1rem'
                    }}>
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="votre@email.com"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid var(--color-border)',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        background: 'var(--color-surface)',
                        transition: 'all var(--transition-fast)',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label style={{
                    display: 'block',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    Type de projet
                  </label>
                  <select 
                    name="projet" 
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--color-surface)',
                      transition: 'all var(--transition-fast)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Sélectionnez votre besoin</option>
                    <option value="dressing">Organisation de dressing</option>
                    <option value="cuisine">Optimisation cuisine</option>
                    <option value="bureau">Aménagement bureau</option>
                    <option value="enfant">Chambre d'enfant</option>
                    <option value="garage">Rangement garage/cave</option>
                    <option value="maison">Maison complète</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>
                
                <div style={{marginBottom: '2rem'}}>
                  <label style={{
                    display: 'block',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    Décrivez votre projet *
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5}
                    placeholder="Parlez-moi de votre espace, vos difficultés actuelles, vos objectifs... Plus vous serez précis(e), mieux je pourrai vous conseiller !"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '1rem',
                      background: 'var(--color-surface)',
                      transition: 'all var(--transition-fast)',
                      resize: 'vertical',
                      minHeight: '120px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                
                <div style={{
                  textAlign: 'center'
                }}>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    style={{
                      background: isLoading 
                        ? '#94a3b8' 
                        : 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                      color: 'white',
                      padding: '1.25rem 3rem',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      border: 'none',
                      borderRadius: 'var(--border-radius)',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      boxShadow: 'var(--shadow-lg)',
                      transition: 'all var(--transition-base)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isLoading ? (
                      <>🔄 Envoi en cours...</>
                    ) : (
                      <>📩 Envoyer ma demande</>
                    )}
                  </button>
                  
                  <p style={{
                    marginTop: '1rem',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)',
                    opacity: 0.8
                  }}>
                    Je vous réponds sous 24h. Devis gratuit et sans engagement.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'var(--border-radius-xl)',
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid rgba(34, 197, 94, 0.3)'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>✅</div>
              
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Merci pour votre demande !
              </h3>
              
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem'
              }}>
                J'ai bien reçu votre message et je vous recontacte très rapidement 
                pour discuter de votre projet et vous proposer un devis personnalisé.
              </p>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: 'var(--border-radius)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <p style={{
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem'
                }}>
                  💡 En attendant, n'hésitez pas à consulter mes autres réalisations 
                  ou à me suivre sur les réseaux sociaux pour découvrir mes astuces d'organisation !
                </p>
              </div>
            </div>
          )}
          
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>⚡</span>
                <span>Réponse sous 24h</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>🆓</span>
                <span>Devis gratuit</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>🤝</span>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}