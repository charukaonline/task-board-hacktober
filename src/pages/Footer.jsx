import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Logo & About */}
        <div className="footer-section about">
          <h2 className="footer-logo">SkillHive</h2>
          <p>
            Empowering learners worldwide with cutting-edge skills and knowledge. 
            Join our community and start your journey today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@skillhive.com</p>
          <p>Phone: +94 71 583 1767</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SkillHive. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
