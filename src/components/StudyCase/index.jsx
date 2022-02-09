import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../../assets/projects.json';

const StudyCase = () => {
  const {client} = useParams();

  return (
    <div className='project'>
      <div className='project__name'>
        PROJET {client.toUpperCase()}
      </div>
      <div className='project__picture'>
        <img src="" alt="project picture" />
      </div>
      <div className='project__title'>
        {Projects[client].title}
      </div>
      <div className='project__content'>
        {Projects[client].content}
      </div>
    </div>
  )
};



export default StudyCase;