import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../../assets/projects.json';
import ThemeContext from '../../contexts/ThemeContext';

const StudyCase = () => {
  const darkTheme = useContext(ThemeContext);
  const {client} = useParams();
  const project = Projects[client];
  return (
    <main>
      <div className={darkTheme.darkTheme ? "hero dark" : "hero light"}>
        <div className='project project-solo'>
          <div className='project__title'>
            PROJET {project.clientName.toUpperCase()}
          </div>
          <div className='project__picture'>
            <img src={`../React-Agency/${project.pictureUrl}`} alt="project picture" />
          </div>
          <div className='project__description'>
            {project.title}
          </div>
          <div className='project__content'>
            {project.content}
          </div>
        </div>
      </div>
    </main>
  )
};

export default StudyCase;