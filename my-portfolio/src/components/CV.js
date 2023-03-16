import React from 'react';
import cvPDF from './CV.pdf';
import { Button } from 'react-bootstrap';

function CV() {
  return (
    <div>
      
      <p>
        <Button href={cvPDF} download="CV_Jenelle_Spio-Garbrah.pdf" variant="primary">
          Download my CV
        </Button>
      </p>
    </div>
  );
}

export default CV;
