import React from "react";
import "./style.css";

function Footer() {
  const year = new Date().getFullYear();
return (
  <footer className="footer text-center">
    <span>©Mengyue Zhang {year}</span>
  </footer>
);
}

export default Footer;
