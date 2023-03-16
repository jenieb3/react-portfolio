import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', padding: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" color="white">Ways to Contact Me</Typography>
        <Typography color="white">
          <Link href="mailto:jenelle.garbrah3@gmail.com" color="inherit">
            <EmailIcon /> Email
          </Link>
        </Typography>
        <Typography color="white">
          <Link href="https://www.linkedin.com/in/jenelle-spio-garbrah" color="inherit">
            <LinkedInIcon /> LinkedIn
          </Link>
        </Typography>
        <Typography color="white">
          <Link href="https://github.com/jenieb3" color="inherit">
            <GitHubIcon /> GitHub
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
