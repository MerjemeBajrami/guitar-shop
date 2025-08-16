import React from 'react';
import '../styles/features.css';
import browsing from "../assets/browsing.png"; 
import delivery from "../assets/delivery.png"; 
import wallet from "../assets/empty-wallet-tick.png"; 


export default function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">
        Why try <span className="highlight">VibeStrings?</span>
      </h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
             <img src={browsing} alt="" />
          </div>
          <h3>SMOOTH BROWSING</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={delivery} alt="" />
          </div>
          <h3>EASY DELIVERY</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={wallet} alt="" />
          </div>
          <h3>SWIFT PAYMENTS</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>
      </div>
    </section>
  );
}
