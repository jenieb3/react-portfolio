import React from 'react';

function Project(props) {
  const { title, deployedLink, githubLink, screenshot } = props.project;

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="row">
        <div className="col-md-8">
          <img src={screenshot} alt={title} />
        </div>
        <div className="col-md-4">
          <h2>Links</h2>
          <ul>
            <li>
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Application</a>
            </li>
            <li>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">View repository on GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;