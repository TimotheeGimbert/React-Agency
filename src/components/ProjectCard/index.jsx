/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  const project = props.project;
  return (
    <div className='project'>
      <div className='project__title'>
        PROJET {project.clientName.toUpperCase()}
      </div>
      <div className='project__picture'>
        <img src={{ pathname: `${project.pictureUrl}` }} alt="project picture" />
      </div>
      <div className='project__description'>
        {project.title}
      </div>
      <Link to={{ pathname: `/works/${project.clientName.toLowerCase()}-study-case` }}>
        <button>Voir</button>
      </Link>
    </div>
  )
};



export default ProjectCard;