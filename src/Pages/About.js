import React from 'react';

function About() {
  return (
    <div className='mx-auto col-md-8'>
      <h2 className='my-4 text-center'>About Project:</h2>
      <p>Full-stack project (MERN stack). </p>
      <p>Used Tools:</p>
      <p>
        <span className='fw-bold'> Front-end:</span> JavaScript, HTML,CSS,
        React, Bootstrap, React-router
      </p>
      <p>
        <span className='fw-bold'>Back-end:</span> Node.js, Express,
        Mongoose(MongoDB)
      </p>
    </div>
  );
}

export default About;
