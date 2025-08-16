import React from 'react';
import appStore from "../assets/app_store.png"; 
import googlePlay from "../assets/google_play.png"; 
import browseGroup from "../assets/Group_app.png";
import '../styles/browse.css';


export default function Browse() {
  return (
    <section className="browse-section">
       <div className="browse_text">
          <h2 className="browse-title">
        Browse and buy your <span className="highlight">favorite guitars</span> with VibeStrings.
          </h2>
        <div className="download">
             <img src={googlePlay} alt="" />
             <img src={appStore} alt="" />
        </div>
    </div>
    <img src={browseGroup} alt="" />
    </section>
  );
}
