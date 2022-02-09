import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Projects from '../../assets/projects.json';

const Works = () => {

  return (
    <main className='Works'>
      <div className='hero'>
        <h2>Au fil des années, nous accompagnons les meilleurs</h2>
        <p>Découvrez pas à pas comment nous sommes présents pour lancer vos marques préférées</p>
      </div>
      <section className='projects'>
        <ProjectCard project={Projects['darwin']}/>
        <ProjectCard project={Projects['tropcstraw']}/>
        <ProjectCard project={Projects['kedal']}/>
      </section>
    </main>
  )
};

export default Works;