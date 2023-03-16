import React from 'react';
import Data from './Data';
import projectOne from '../assets/project-one.png';
import projectTwo from '../assets/project-two.png';
import generatePassword from '../assets/generate-password.png';
import workdaySchedule from '../assets/workday-schedule.png';
import forecastCity from '../assets/forecast-city.png';
import teamPage from '../assets/team-page.png';
import { Card, Button, Row, Col } from 'react-bootstrap';


function Project(props) {
  const { title, screenshot, deployedLink, githubLink } = props.project;
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={screenshot} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" href={deployedLink} target="_blank" rel="noopener noreferrer">
            View Demo
          </Button>
          {' '}
          <Button variant="secondary" href={githubLink} target="_blank" rel="noopener noreferrer">
            View Code
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Projects() {
  const getImage = (imageName) => {
    switch (imageName) {
      case 'project-one.png':
        return projectOne;
      case 'project-two.png':
        return projectTwo;
      case 'generate-password.png':
        return generatePassword;
      case 'workday-schedule.png':
        return workdaySchedule;
      case 'forecast-city.png':
        return forecastCity;
      case 'team-page.png':
        return teamPage;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <Row>
        {Data.map((project) => (
          <Project
            key={project.id}
            project={{ ...project, screenshot: getImage(project.screenshot) }}
          />
        ))}
      </Row>
    </div>
  );
}

export default Projects;
