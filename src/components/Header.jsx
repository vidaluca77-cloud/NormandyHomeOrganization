import React from 'react';

export default function Header() {
  return (
    <header style={{
      background: 'var(--color-primary)',
      padding: '1.5rem 0',
      borderBottom: '2px solid var(--color-secondary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'0.7rem'}}>
          <img src="/assets/logo-nho.svg" alt="Logo Normandy Home Organiser" style={{height:'50px'}} />
          <span style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            letterSpacing: '1px'
          }}>Normandy Home Organiser</span>
        </div>
        <nav>
          <a href="#portfolio" style={{marginRight: '2rem'}}>Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}