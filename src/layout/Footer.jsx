import React from "react";
import { useLanguage } from "../context/Languagecontext";
import logo from "../assets/Butterfly.png";
import sms from "../assets/sms.png";
import location from "../assets/location.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import '../styles/footer.css';

export default function Footer() {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Contact */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="VibeStrings" />
            <h2>VibeStrings</h2>
          </div>
          <div className="footer-contact">
            <div className="sms">
              <img src={sms} alt="" />
              <p>Enquiry@VibeStrings.com</p>
            </div>
            <div className="location">
              <img src={location} alt="" />
              <p>San Francisco</p>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-section">
          <h4>PAGES</h4>
          <ul>
            <li>Store</li>
            <li>Collections</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Product */}
        <div className="footer-section">
          <h4>PRODUCT</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Copyright</li>
          </ul>
        </div>

        {/* Social & Language */}
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="footer-social">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
          </div>

          {/* Language Switcher */}
          <div className="footer-language" style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
            <button onClick={() => setLanguage("en")} disabled={language === "en"}>English</button>
            <button onClick={() => setLanguage("mk")} disabled={language === "mk"}>Македонски</button>
            <button onClick={() => setLanguage("sq")} disabled={language === "sq"}>Shqip</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2022 Copyright. VibeStrings</p>
      </div>
    </footer>
  );
}
