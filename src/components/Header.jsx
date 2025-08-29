import React from 'react';

export default function Header() {
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
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#portfolio" style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontWeight: 500,
            transition: 'all var(--transition-fast)',
            color: 'var(--color-text-light)'
          }}>
            Portfolio
          </a>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--border-radius)',
            fontWeight: 500,
            textDecoration: 'none',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-base)'
          }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}