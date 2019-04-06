import React from 'react';
import doug_logo_2 from '../images/doug_logo_2.jpg';

const logoStyle = {
  width: '200px',
  height: '100px',
  position: 'relative'
};

const Footer = () => {
  return (
    <footer className="page-footer page-footer-expand-sm mt-3">
      <div className="container">
        <div className="d-flex flex-row">
          <h5 className="align-self-center mr-3 font-weight-bold">
            Doug Funnie Memory Game!
          </h5>
          <img
            src={doug_logo_2}
            alt="Doug Logo"
            className="my-2"
            style={logoStyle}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
