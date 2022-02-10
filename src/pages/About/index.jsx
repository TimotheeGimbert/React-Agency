import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const About = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <main>
      <div className={darkTheme.darkTheme ? "hero dark" : "hero light"}>
        <h2>Websitic, agence de communication digitale basée à Paris, accompagne vos projets digitaux</h2>
        <p>
            De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, 
            nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
            Laissez votre projet entre des mains dignes de confiance, ayant accompagné PLATON, TCar, Solane ou encore Sedal vers le sommet.
        </p>
      </div>
    </main>
  )
};

export default About;