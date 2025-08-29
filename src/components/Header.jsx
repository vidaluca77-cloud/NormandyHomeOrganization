import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
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
            <div>
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
        
        <nav style={{
          display: 'flex',
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
    </header>
  );
}