import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container" style={{
        display:'flex',
        flexDirection:'row',
        gap:'2rem',
        flexWrap:'wrap',
        alignItems:'center'
      }}>
        <div style={{flex:1, minWidth:'240px'}}>
          <img src="/assets/profile-illustration.png" alt="Portrait Home Organiser" style={{maxHeight:'220px'}} />
        </div>
        <div style={{flex:2, minWidth:'260px'}}>
          <h2>À propos</h2>
          <p style={{fontSize:'1.15rem', marginBottom:'1rem'}}>
            <strong>Bonjour ! Je suis Lucie, fondatrice de Normandy Home Organiser.</strong>
          </p>
          <p>
            <strong>5 ans d’expérience professionnelle</strong> auprès de clients particuliers et professionnels, où j’ai pu transformer des dizaines d’espaces encombrés en véritables havres de paix.<br />
            Passionnée d’organisation et de rangement depuis l’enfance, j’ai affiné des méthodes efficaces et bienveillantes pour vous accompagner dans la réorganisation de votre intérieur.<br />
            <br />
            <span style={{color:'var(--color-accent)'}}>Mon objectif :</span> vous aider à retrouver sérénité, gain de temps et plaisir dans votre espace de vie.<br />
            <br />
            <span style={{fontWeight:500}}>Mes compétences :</span>
            <ul>
              <li>Organisation intérieure personnalisée</li>
              <li>Optimisation de l’espace</li>
              <li>Tri, désencombrement, rangement</li>
              <li>Accompagnement humain et discret</li>
              <li>Conseils et suivi sur-mesure</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}