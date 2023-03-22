import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import '@mui/styled-engine-sc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
);

