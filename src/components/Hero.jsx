import React from 'react';

export default function Hero() {
  return (
    <section className="section" style={{
      background: 'var(--color-secondary)',
      borderRadius: 'var(--border-radius)',
      margin: '2rem 0',
      boxShadow: '0 4px 24px #0001'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <div style={{flex:1, minWidth:'260px'}}>
          <h1 style={{fontSize:'2.4rem', marginBottom:'1rem'}}>
            Organisez, Optimisez, Respirez
          </h1>
          <p style={{fontSize:'1.2rem', marginBottom:'2rem'}}>
            Normandy Home Organiser vous accompagne dans l’organisation et le rangement de votre intérieur.<br />
            <strong>Optimisation d’espace, tri, rangement, désencombrement</strong> : vivez dans un environnement serein et harmonieux.
          </p>
          <a href="#contact">
            <button>Recevoir un devis personnalisé</button>
          </a>
        </div>
        <div style={{flex:1, minWidth:'200px', textAlign:'center'}}>
          <img src="/assets/hero-illustration.png" alt="Illustration Home Organiser" style={{
            maxHeight:'260px',
            width:'auto',
            borderRadius:'var(--border-radius)',
            background:'var(--color-bg)',
            boxShadow:'0 2px 24px #0001'
          }} />
        </div>
      </div>
    </section>
  );
}