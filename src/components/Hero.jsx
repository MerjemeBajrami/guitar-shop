import React from "react";
import "../styles/hero.css";
import guitarImg from "../assets/main_img.png"; 
import logoIcon from "../assets/Butterfly.png";    
import { useLanguage } from "../context/Languagecontext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      {/* Logo at top-left */}
      <div className="logo">
        <img src={logoIcon} alt="VibeStrings logo" className="logo-img" />
        <p className="vibeStrings">VibeStrings</p>
      </div>

      {/* Hero text */}
      <div className="hero-text">
        <h1>
          {t("heroTitleStart")} <span className="highlight">{t("heroTitleHighlight")}</span> {t("heroTitleEnd")}
        </h1>
        <p>{t("heroSubtitle")}</p>
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

