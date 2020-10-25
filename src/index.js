import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallary from './PhotoGallary';
import Footer from './Footer';
import Header from './Header';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ImageGallary />
    <Footer /> 
  </React.StrictMode>,
  document.getElementById('root')
);
