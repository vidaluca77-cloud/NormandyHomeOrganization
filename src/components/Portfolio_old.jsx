import React from 'react';

const works = [
  {
    before: '/assets/portfolio/before1.jpg',
    after: '/assets/portfolio/after1.jpg',
    description: 'Transformation d’un salon encombré en espace lumineux et épuré.'
  },
  {
    before: '/assets/portfolio/before2.jpg',
    after: '/assets/portfolio/after2.jpg',
    description: 'Réorganisation d’une chambre d’enfant pour un rangement facile au quotidien.'
  },
  {
    before: '/assets/portfolio/before3.jpg',
    after: '/assets/portfolio/after3.jpg',
    description: 'Optimisation d’une cuisine familiale, chaque chose à sa place !'
  }
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 style={{marginBottom:'2rem'}}>Portfolio avant / après</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
          gap:'2rem'
        }}>
          {works.map((w, idx) => (
            <div key={idx} style={{
              background:'var(--color-secondary)',
              borderRadius:'var(--border-radius)',
              padding:'1rem',
              boxShadow:'0 2px 16px #0001'
            }}>
              <div style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
                <div style={{flex:1}}>
                  <span style={{fontWeight:500, fontSize:'0.95rem'}}>Avant</span>
                  <img src={w.before} alt={`Avant ${idx+1}`} style={{marginTop:'0.5rem'}}/>
                </div>
                <div style={{flex:1}}>
                  <span style={{fontWeight:500, fontSize:'0.95rem'}}>Après</span>
                  <img src={w.after} alt={`Après ${idx+1}`} style={{marginTop:'0.5rem'}}/>
                </div>
              </div>
              <p style={{fontSize:'1rem', color:'var(--color-accent)'}}>{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}