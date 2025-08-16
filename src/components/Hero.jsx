import React from "react";
import "../styles/hero.css";
import guitarImg from "../assets/main_img.png"; 
import logoIcon from "../assets/Butterfly.png";    
import logoText from "../assets/VibeStrings.png"; 
export default function Hero() {
  return (
    <section className="hero">
  {/* Logo at top-left */}
  <div className="logo">
    <img src={logoIcon} alt="VibeStrings logo" className="logo-img" />
    <img src={logoText} alt="VibeStrings text" className="logo-text" />
  </div>

  {/* Hero text */}
  <div className="hero-text">
    <h1>
      Browse top quality <span className="highlight">Guitars</span> online
    </h1>
    <p>
      Explore 50k+ latest collections of branded guitars online with VibeStrings.
    </p>
  </div>

  {/* Hero image */}
  <div className="hero-image">
    <img src={guitarImg} alt="Electric guitar and amp" />
    <div className="curve">
      <img src={logoIcon} alt="small logo" />
    </div>
  </div>
</section>


  );
}
