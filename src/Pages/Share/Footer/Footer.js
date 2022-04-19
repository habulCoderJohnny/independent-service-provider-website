import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-primary sm:container">
        <div className="text-center p-3 " style=
        {{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2022 Copyright:
          <a className="p-2 text-white text-decoration-none" href="https://github.com/habulCoderJohnny">J-Planet</a>
        </div>
      </footer>
    );
};

export default Footer;

