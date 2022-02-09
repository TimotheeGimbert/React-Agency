import React from 'react';
import { useParams } from 'react-router-dom';
import StudyCases from './studyCases.json';

const StudyCase = () => {
  const {client} = useParams();

  return (
    <>
      <h1>PROJET {client.toUpperCase()}</h1>
      <h2>{StudyCases[client].title}</h2>
      <p>{StudyCases[client].content}</p>
    </>
  )
};



export default StudyCase;