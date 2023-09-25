import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="Row">
        <div className="footer-pic">
          <img src={Logo}></img>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reserve-table">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">OrderOnline</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Adress Adress Adress Adress Adress AdressAdress Adress Adress</p>
          <p>phone number : 09999999999</p>
          <p>Email : test@test.com</p>
        </div>
        <div className="footer-socials">
        <h4>Socials</h4>
          
            <div>
            <a href="#">facebook</a>
            </div>
            <div>
            <a href="#">Instagram</a>
            </div>
            <div>
            <a href="#">Tiktok</a>
            </div>
          
    
        </div>
      </div>
    </footer>
  );
}

export default Footer;
