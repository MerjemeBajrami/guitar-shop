import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/Butterfly.png";
import sms from "../assets/sms.png";
import location from "../assets/location.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import '../styles/footer.css';


export default function Footer() {
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
           <div className="sms"> <img src={sms} alt="" /><p> Enquiry@VibeStrings.com</p></div>
            <div className="location"> <img src={location} alt="" /><p>San Francisco</p></div>
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

        {/* Social */}
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="footer-social">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
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
