import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>© 2025 LinisLuxe Cleaning Services Incorporated | All rights reserved</p>

        <div className="footer-contacts">
          <a href="tel:4372678504">
            <FaPhoneAlt /> (437) 267-8504
          </a>
          <a href="https://www.facebook.com/profile.php?id=61581394244406" target="_blank" rel="noopener noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://instagram.com/linisluxe" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="mailto:linisluxe@yahoo.com">
            <FaEnvelope /> linisluxe@yahoo.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
