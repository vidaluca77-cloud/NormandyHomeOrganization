import React, { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => setSent(true))
    .catch((error) => console.error('Error:', error));
  }

  return (
    <section className="section" id="contact">
      <div className="container" style={{
        maxWidth:'600px',
        background:'var(--color-secondary)',
        padding:'2rem',
        borderRadius:'var(--border-radius)',
        boxShadow:'0 2px 16px #0001'
      }}>
        <h2 style={{marginBottom:'1rem'}}>Demande de devis / Contact</h2>
        {!sent ? (
          <form onSubmit={handleSubmit} name="contact" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" style={{display: 'none'}} />
            <div style={{marginBottom:'1.2rem'}}>
              <label>Nom :</label>
              <input type="text" name="nom" required style={{width:'100%', padding:'0.7em', borderRadius:'var(--border-radius)', border:'1px solid #ccc', marginTop:'0.3em'}}/>
            </div>
            <div style={{marginBottom:'1.2rem'}}>
              <label>Email :</label>
              <input type="email" name="email" required style={{width:'100%', padding:'0.7em', borderRadius:'var(--border-radius)', border:'1px solid #ccc', marginTop:'0.3em'}}/>
            </div>
            <div style={{marginBottom:'1.2rem'}}>
              <label>Votre demande :</label>
              <textarea name="message" required rows={4} style={{width:'100%', padding:'0.7em', borderRadius:'var(--border-radius)', border:'1px solid #ccc', marginTop:'0.3em'}}></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        ) : (
          <div>
            <p style={{color:'var(--color-accent)', fontWeight:500, fontSize:'1.1rem'}}>Merci pour votre message ! Je vous recontacte très vite.</p>
          </div>
        )}
      </div>
    </section>
  );
}