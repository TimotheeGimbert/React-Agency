import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import Projects from '../../assets/projects.json';
import CardsContext from '../../contexts/CardsContext';

const Works = () => {
  const [cardDisplay, setCardDisplay] = useState(true);

  return (
    <CardsContext.Provider value={{
      cardDisplay,
      toggleCards: () => setCardDisplay(cardDisplay => !cardDisplay)
    }}>
      <main className='Works'>
        <div className='hero'>
          <h2>Au fil des années, nous accompagnons les meilleurs</h2>
          <p>Découvrez pas à pas comment nous sommes présents pour lancer vos marques préférées</p>
        </div>
        {(cardDisplay) && 
        <section className='projects'>
          <ProjectCard project={Projects['darwin']}/>
          <ProjectCard project={Projects['tropcstraw']}/>
          <ProjectCard project={Projects['kedal']}/>
        </section>
          || 
        <section className='projects'>
          <Link to={{ pathname: `/works/darwin-study-case` }}>Découvrir le projet Darwin</Link>
          <Link to={{ pathname: `/works/tropcstraw-study-case` }}>Découvrir le projet TropCStraw</Link>
          <Link to={{ pathname: `/works/kedal-study-case` }}>Découvrir le projet Kedal</Link>
        </section>
        }
        <button onClick={() => setCardDisplay(!cardDisplay)}>Changer affichage des projets</button>
      </main>
    </CardsContext.Provider>
  )
};

export default Works;