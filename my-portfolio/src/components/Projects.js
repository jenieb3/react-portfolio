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
      <Card className="card-border" style={{ height: "300px", maxWidth: "550px" }}>
        <Card.Img
          variant="top"
          src={screenshot}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{title}</Card.Title>
          </div>
          <div>
            <Button
              variant="primary"
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 center"
            >
              View Demo
            </Button>
            <Button
              variant="secondary"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="center"
            >
              View Code
            </Button>
          </div>
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
