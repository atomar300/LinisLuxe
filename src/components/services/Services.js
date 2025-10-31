import React from "react";
import "./Services.css";

function Services() {
  const serviceList = [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Office Cleaning",
    "Storage Cleaning",
    "Move In-Out Cleaning",
    "Commercial Kitchen Cleaning",
    "And more!"
  ];

  return (
    <section className="services">
      <h2>Our Cleaning Services</h2>
      <ul>
        {serviceList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
