import React from 'react';
import { Container, Button, Box, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      padding: 1,
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height:'45px'
      
    }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={4}>
          <Button
            href="mailto:jenelle.garbrah3@gmail.com"
            startIcon={<EmailIcon />}
            variant="outlined"
            color="inherit"
          >
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/jenelle-spio-garbrah"
            startIcon={<LinkedInIcon />}
            variant="outlined"
            color="inherit"
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/jenieb3"
            startIcon={<GitHubIcon />}
            variant="outlined"
            color="inherit"
          >
            GitHub
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;