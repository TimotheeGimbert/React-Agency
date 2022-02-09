import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../../assets/projects.json';

const StudyCase = () => {
  const {client} = useParams();
  const project = Projects[client];
  return (
    <main>
      <section className='hero'>
        <div className='project project-solo'>
          <div className='project__title'>
            PROJET {project.clientName.toUpperCase()}
          </div>
          <div className='project__picture'>
            <img src={`../${project.pictureUrl}`} alt="project picture" />
          </div>
          <div className='project__description'>
            {project.title}
          </div>
          <div className='project__content'>
            {project.content}
          </div>
        </div>
      </section>
    </main>
  )
};

export default StudyCase;