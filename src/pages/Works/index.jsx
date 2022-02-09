import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import Projects from '../../assets/projects.json';

const Works = () => {

  return (
    <main className='Works'>
      <div className='hero'>
        <h2>Au fil des années, nous accompagnons les meilleurs.</h2>
        <p>Découvrez pas à pas comment nous sommes présents pour lancer vos marques préférées.</p>
      </div>
      <section className='projects'>
        <ProjectCard project={Projects['001']}/>
        <ProjectCard project={Projects['002']}/>
        <ProjectCard project={Projects['003']}/>
      </section>
        <Link to='/works/platon-study-case'>Platon</Link>
        <Link to='/works/solane-study-case'>Solane</Link>
        <Link to='/works/sedal-study-case'>Sedal</Link>
    </main>
  )
};

export default Works;