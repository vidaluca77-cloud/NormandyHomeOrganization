import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      before: '/assets/portfolio/before4.jpg',
      after: '/assets/portfolio/after4.jpg',
      title: 'Salon familial moderne',
      category: 'salon',
      description: 'Transformation complète d\'un salon encombré en espace de vie lumineux et fonctionnel.',
      details: 'Surface: 25m² • Durée: 2 jours • Budget: 350€',
      challenges: 'Espace restreint, nombreux objets personnels, manque de rangements',
      solutions: 'Optimisation verticale, mobilier multifonction, zones définies'
    },
    {
      id: 2,
      before: '/assets/portfolio/before5.jpg',
      after: '/assets/portfolio/after5.jpg',
      title: 'Chambre d\'enfant organisée',
      category: 'chambre',
      description: 'Réorganisation d\'une chambre d\'enfant pour favoriser l\'autonomie et le rangement facile.',
      details: 'Surface: 12m² • Durée: 1 jour • Budget: 200€',
      challenges: 'Jouets éparpillés, vêtements mélangés, difficulté d\'accès',
      solutions: 'Bacs de rangement étiquetés, hauteur adaptée, système de rotation'
    },
    {
      id: 3,
      before: '/assets/portfolio/before3.jpg',
      after: '/assets/portfolio/after3.jpg',
      title: 'Cuisine familiale optimisée',
      category: 'cuisine',
      description: 'Optimisation d\'une cuisine familiale pour une utilisation quotidienne plus fluide.',
      details: 'Surface: 15m² • Durée: 1,5 jours • Budget: 280€',
      challenges: 'Ustensiles dispersés, placards surchargés, plan de travail encombré',
      solutions: 'Zonage par usage, rangements tiroirs, système vertical'
    },
    {
      id: 4,
      before: '/assets/portfolio/before1.jpg',
      after: '/assets/portfolio/after1.jpg',
      title: 'Bureau professionnel',
      category: 'bureau',
      description: 'Création d\'un espace de travail productif et organisé dans un bureau à domicile.',
      details: 'Surface: 10m² • Durée: 1 jour • Budget: 220€',
      challenges: 'Paperasse accumulée, câbles emmêlés, manque de concentration',
      solutions: 'Classement efficace, gestion des câbles, zones dédiées'
    },
    {
      id: 5,
      before: '/assets/portfolio/before2.jpg',
      after: '/assets/portfolio/after2.jpg',
      title: 'Dressing sur-mesure',
      category: 'dressing',
      description: 'Transformation d\'un dressing chaotique en garde-robe organisée et fonctionnelle.',
      details: 'Surface: 8m² • Durée: 2 jours • Budget: 320€',
      challenges: 'Vêtements entassés, saisons mélangées, accessoires perdus',
      solutions: 'Tri par catégorie, rotation saisonnière, rangements spécialisés'
    },
    {
      id: 6,
      before: '/assets/portfolio/before3.jpg',
      after: '/assets/portfolio/after3.jpg',
      title: 'Salle de bain familiale',
      category: 'salle-de-bain',
      description: 'Optimisation d\'une salle de bain familiale pour plus de praticité au quotidien.',
      details: 'Surface: 6m² • Durée: 0,5 jour • Budget: 150€',
      challenges: 'Produits éparpillés, serviettes en désordre, espace restreint',
      solutions: 'Rangements muraux, organisateurs tiroirs, hooks multiples'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', count: portfolioItems.length },
    { id: 'salon', name: 'Salons', count: portfolioItems.filter(item => item.category === 'salon').length },
    { id: 'chambre', name: 'Chambres', count: portfolioItems.filter(item => item.category === 'chambre').length },
    { id: 'cuisine', name: 'Cuisines', count: portfolioItems.filter(item => item.category === 'cuisine').length },
    { id: 'bureau', name: 'Bureaux', count: portfolioItems.filter(item => item.category === 'bureau').length },
    { id: 'dressing', name: 'Dressings', count: portfolioItems.filter(item => item.category === 'dressing').length },
    { id: 'salle-de-bain', name: 'Salles de bain', count: portfolioItems.filter(item => item.category === 'salle-de-bain').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image, type) => {
    setLightboxImage({ src: image, type });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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
            ✨ Portfolio de réalisations
          </div>
          
          <h1 style={{
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Nos transformations avant / après
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Découvrez comment nous transformons les espaces encombrés en havres de paix organisés et fonctionnels.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section style={{
        background: 'var(--color-surface)',
        padding: '2rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: selectedCategory === category.id 
                    ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)'
                    : 'transparent',
                  color: selectedCategory === category.id ? 'white' : 'var(--color-text-light)',
                  border: selectedCategory === category.id ? 'none' : '1px solid var(--color-border)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {category.name}
                <span style={{
                  background: selectedCategory === category.id 
                    ? 'rgba(255, 255, 255, 0.2)' 
                    : 'var(--color-accent)',
                  color: selectedCategory === category.id ? 'white' : 'white',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem'
          }}>
            {filteredItems.map((item) => (
              <div key={item.id} style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--border-radius-xl)',
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
                  <h3 style={{
                    fontSize: '1.4rem',
                    margin: 0,
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    opacity: 0.9,
                    fontSize: '0.95rem'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Before/After Images */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr'
                }}>
                  {/* Before */}
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(239, 68, 68, 0.9)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      zIndex: 2
                    }}>
                      ❌ Avant
                    </div>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: `url(${item.before})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)'
                      }}
                      onClick={() => openLightbox(item.before, 'before')}
                    />
                  </div>

                  {/* After */}
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(34, 197, 94, 0.9)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      zIndex: 2
                    }}>
                      ✅ Après
                    </div>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: `url(${item.after})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)'
                      }}
                      onClick={() => openLightbox(item.after, 'after')}
                    />
                  </div>
                </div>

                {/* Details */}
                <div style={{
                  padding: '1.5rem'
                }}>
                  <div style={{
                    background: 'var(--color-bg)',
                    padding: '1rem',
                    borderRadius: 'var(--border-radius)',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      marginBottom: '0.5rem'
                    }}>
                      {item.details}
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                      }}>
                        Défis rencontrés :
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-light)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {item.challenges}
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                      }}>
                        Solutions apportées :
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-light)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {item.solutions}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1rem',
                    textAlign: 'center'
                  }}>
                    <a href="/contact" style={{
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: 'var(--border-radius)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'all var(--transition-base)',
                      display: 'inline-block'
                    }}>
                      Projet similaire ? Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Portfolio Component */}
      <Portfolio />

      {/* Statistics Section */}
      <section className="section" style={{
        background: 'var(--color-surface)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { number: '100+', label: 'Projets réalisés' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '5', label: 'Ans d\'expérience' },
              { number: '24h', label: 'Délai de réponse' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'var(--color-text-light)',
                  fontSize: '1rem'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={closeLightbox}
        >
          <div style={{
            position: 'relative',
            maxWidth: '90%',
            maxHeight: '90%'
          }}>
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-3rem',
                right: 0,
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              ✕
            </button>
            <img 
              src={lightboxImage.src}
              alt={lightboxImage.type === 'before' ? 'Avant transformation' : 'Après transformation'}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-xl)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: lightboxImage.type === 'before' 
                ? 'rgba(239, 68, 68, 0.9)' 
                : 'rgba(34, 197, 94, 0.9)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>
              {lightboxImage.type === 'before' ? '❌ Avant' : '✅ Après'}
            </div>
          </div>
        </div>
      )}

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
            Votre transformation vous attend
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Chaque projet est unique. Découvrons ensemble le potentiel de vos espaces.
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
              Démarrer mon projet
            </a>
            
            <a href="/services" style={{
              color: 'white',
              padding: '1.25rem 2rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 'var(--border-radius)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all var(--transition-base)',
              backdropFilter: 'blur(10px)'
            }}>
              Voir nos services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}