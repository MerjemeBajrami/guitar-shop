import React from 'react';
import appStore from "../assets/app_store.png"; 
import googlePlay from "../assets/google_play.png"; 
import browseGroup from "../assets/Group_app.png";
import '../styles/browse.css';
import { useLanguage } from "../context/Languagecontext";

export default function Browse() {
  const { t } = useLanguage();

  return (
    <section className="browse-section">
      <div className="browse_text">
        <h2 className="browse-title">
          {t("browseTitle").split("favorite guitars").map((part, i) =>
            i === 0 ? part : <span key={i} className="highlight">favorite guitars</span>
          )} with VibeStrings.
        </h2>
        <div className="download">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>
      <img src={browseGroup} alt="Browse group" />
    </section>
  );
}
