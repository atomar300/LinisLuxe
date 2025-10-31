import React from "react";
import "./Header.css";

function Header() {


  const handleScroll = () => {
    const footerSection = document.getElementById("contact");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <header className="navbar">
      <h1 className="brand">LinisLuxe Cleaning Services Incorporated</h1>
      <button className="contact-btn" onClick={handleScroll}>Contact</button>
    </header>
  );
}

export default Header;
