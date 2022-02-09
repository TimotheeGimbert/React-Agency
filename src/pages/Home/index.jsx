import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <div className='hero'>
      <h1>Confiez vos rêves à des experts du Web</h1>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients 
        dans la création de site internet: étude, UX, conception, design, développement, SEO. 
        Notre agence web est capable de répondre à tous vos besoins et d élaborer une véritable stratégie digitale.
      </p>
      <Link to='/works'>
        <button>Découvrez nos projets</button>
      </Link>
    </div>
  </main>
);

export default Home;