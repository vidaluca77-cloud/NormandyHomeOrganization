import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background:'var(--color-primary)',
      padding:'2rem 0',
      marginTop:'4rem',
      borderTop:'2px solid var(--color-secondary)'
    }}>
      <div className="container" style={{
        textAlign:'center',
        color:'var(--color-text)',
        fontSize:'1rem'
      }}>
        &copy; {new Date().getFullYear()} Normandy Home Organiser — Lucie, Home organiser en Normandie.<br />
        <span style={{fontSize:'0.95rem', color:'var(--color-accent)'}}>Site réalisé avec ❤️ et minimalisme</span>
      </div>
    </footer>
  );
}