import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <style>{`
        .header-brand-text {
          display: block;
        }
        .mobile-menu-btn {
          display: none;
        }
        .desktop-nav {
          display: flex;
        }
        
        @media (max-width: 768px) {
          .header-brand-text {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
      
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all var(--transition-base)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem'
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
                fontSize: '1.5rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                NHO
              </div>
              <div className="header-brand-text">
                <div style={{
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.01em'
                }}>
                  Normandy Home Organiser
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-light)',
                  fontWeight: 400
                }}>
                  Organisation professionnelle
                </div>
              </div>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              width: '40px',
              height: '40px'
            }}
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--color-text)',
              borderRadius: '2px',
              transition: 'all var(--transition-fast)',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--color-text)',
              borderRadius: '2px',
              margin: '4px 0',
              transition: 'all var(--transition-fast)',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--color-text)',
              borderRadius: '2px',
              transition: 'all var(--transition-fast)',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
            }} />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{
            gap: '1rem',
            alignItems: 'center'
          }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontWeight: 500,
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? 'var(--color-accent)' : 'var(--color-text-light)',
                  background: location.pathname === item.path ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  border: location.pathname === item.path ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent'
                }}
              >
                {item.label}
              </Link>
            ))}
            
            <Link 
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-base)',
                marginLeft: '0.5rem'
              }}
            >
              Devis gratuit
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 0',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div className="container">
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      padding: '1rem',
                      borderRadius: '8px',
                      fontWeight: 500,
                      transition: 'all var(--transition-fast)',
                      textDecoration: 'none',
                      color: location.pathname === item.path ? 'var(--color-accent)' : 'var(--color-text)',
                      background: location.pathname === item.path ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                      border: location.pathname === item.path ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
                      display: 'block'
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: 'var(--border-radius)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all var(--transition-base)',
                    marginTop: '0.5rem',
                    textAlign: 'center',
                    display: 'block'
                  }}
                >
                  Devis gratuit
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}