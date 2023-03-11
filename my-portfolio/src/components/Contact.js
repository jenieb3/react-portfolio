import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me with any questions or inquiries.</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:youremail@example.com">jenelle.garbrah3@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/">linkedin.com/jenelle-spio-garbrah</a></p>
          <p>GitHub: <a href="https://github.com/">github.com/jenieb3</a></p>
          <p>CV: <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></p>
        </div>
        <div className="col-md-6">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
              <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;