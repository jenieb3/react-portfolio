import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CV from './CV.pdf';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!name) {
      setNameError('Please enter your name.');
      valid = false;
    } else {
      setNameError('');
    }
    if (!email) {
      setEmailError('Please enter your email.');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!message) {
      setMessageError('Please enter a message.');
      valid = false;
    } else {
      setMessageError('');
    }
    if (valid) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Contact Form</h5>
          {submitted ? (
            <p>Thank you, we have received your message.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <div className="text-danger">{nameError}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-danger">{emailError}</div>}
                <small id="emailHelp" className="form-text text-muted">
                  I'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError && <div className="text-danger">{messageError}</div>}
              </div>
              <button type="submit" className="btn btn-primary move">
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="col-md-6 text-end">
          <Button href={CV} download="CV_Jenelle_Spio-Garbrah.pdf" variant="primary">
            Download my CV
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
