import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__author">Developed by Jeremy Rivera</h3>
        <h3 className="footer__year">{new Date().getFullYear()}</h3>
      </div>
    </footer>
  );
};

export default Footer;
