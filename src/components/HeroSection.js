import React from "react";
import livingroom from "../assets/living_room.png";
import kitchen from "../assets/kitchen.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Professional Cleaning Service</h2>
        <p>
          Where Clean Meets Luxury.
          <p>We offer Daily, Weekly, or Monthly Cleaning Options to fit your lifestyle.</p>
        </p>
      </div>

      <div className="hero-image">
        <img src={kitchen} alt="Clean kichen" />
        <img src={livingroom} alt="Clean living room" />
      </div>
    </section>
  );
};

export default HeroSection;




// import React from 'react'
// import "./HeroSection.css"
// import image from '../assets/living_room.png';

// const OnePage = () => {
//   return (
//     <div className='full-page'>
//         <div className='header'>
//             <div className='left'>LinisLuxe</div>
//             <div className='right'>{"Book an appointment at (437) 267-8504"}</div>
//         </div>
//         <div className='body'>

//             <div>
//                 {"Professional Cleaning Service"}
//                 {"Where Clean Meets Luxary"}
//             </div>

//             <div>
//                 {"We offer DAILY, WEEKLY, or MONTHLY CLEANING OPTIONS"}
//             </div>

//             {/* <div className='services'>
            //     <div>Our Services</div>
            //     <ul>
            //         <li>Residential Cleaning</li>
            //         <li>Commercial Cleaning</li>
            //         <li>Office Cleaning</li>
            //         <li>Storage Cleaning</li>
            //         <li>Move in-out Cleaning</li>
            //         <li>Commercial Kitchen Cleaning</li>
            //         <li>And more!</li>
            //     </ul>
            // </div> */}

            // <div className='image'>
            //     <img src={image}/>
            // </div>

            // {/* <div>
            //     <div>Contact</div>
            //     <ul>
            //         <li>Phone Number</li>
            //         <li>Facebook</li>
            //         <li>Instagram</li>
            //         <li>Email</li>
            //     </ul>
            // </div> */}

//         </div>
//     </div>
//   )
// }

// export default OnePage