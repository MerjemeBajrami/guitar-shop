import React from 'react';
import '../styles/features.css';
import browsing from "../assets/browsing.png"; 
import delivery from "../assets/delivery.png"; 
import wallet from "../assets/empty-wallet-tick.png"; 
import { useLanguage } from "../context/Languagecontext";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features-section">
      <h2 className="features-title">
        {t("whyTry").split("VibeStrings").map((part, i, arr) => (
          i === 0 ? part : <span key={i} className="highlight">VibeStrings</span>
        ))}
      </h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <img src={browsing} alt={t("smoothBrowsing")} />
          </div>
          <h3>{t("smoothBrowsing")}</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={delivery} alt={t("easyDelivery")} />
          </div>
          <h3>{t("easyDelivery")}</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={wallet} alt={t("swiftPayments")} />
          </div>
          <h3>{t("swiftPayments")}</h3>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>
      </div>
    </section>
  );
}
