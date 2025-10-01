import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Terms and Conditions</h1>
          <p className="hero-subtitle">
            Please read these terms carefully before using our services.
          </p>
          <p className="last-updated">Last updated: October 1, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          {/* Introduction */}
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to SkillHive (“we,” “our,” or “us”). By accessing or using
              our website and services, you agree to comply with and be bound by
              these Terms and Conditions. If you do not agree, please do not use
              our website.
            </p>
          </div>

          {/* Eligibility */}
          <div className="terms-section">
            <h2>2. Eligibility</h2>
            <p>
              By using our services, you represent and warrant that you are at
              least 13 years old and capable of entering into a legally binding
              agreement. If you are under 18, you may use our services only with
              the involvement of a parent or guardian.
            </p>
          </div>

          {/* User Accounts */}
          <div className="terms-section">
            <h2>3. User Accounts</h2>
            <p>
              To access certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your
              account information and for all activities under your account.
            </p>
            <ul>
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for safeguarding your password.</li>
              <li>
                Notify us immediately of any unauthorized access or security
                breaches.
              </li>
            </ul>
          </div>

          {/* Use of Services */}
          <div className="terms-section">
            <h2>4. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in fraudulent or harmful activities</li>
              <li>Upload malicious code, spam, or offensive content</li>
              <li>
                Interfere with the security or functionality of the platform
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this
              website are owned by SkillHive or its licensors. You may not
              reproduce, distribute, or modify any content without prior written
              consent.
            </p>
          </div>

          {/* Payments */}
          <div className="terms-section">
            <h2>6. Payments</h2>
            <p>
              If you purchase any services, you agree to provide accurate
              payment information and authorize us to charge applicable fees.
              All payments are processed securely through third-party providers.
            </p>
          </div>

          {/* Termination */}
          <div className="terms-section">
            <h2>7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any
              time, without notice, if we believe you have violated these Terms.
              Upon termination, your right to use our services will cease
              immediately.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SkillHive shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the website or services.
            </p>
          </div>

          {/* Indemnification */}
          <div className="terms-section">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold SkillHive harmless from any
              claims, losses, damages, liabilities, and expenses arising out of
              your use of the website or violation of these Terms.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="terms-section">
            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions periodically. We will
              notify you by posting the new terms on this page with an updated
              date. Your continued use of the site constitutes acceptance of the
              revised terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of your jurisdiction, without regard to its conflict of
              law principles.
            </p>
          </div>

          {/* Contact Information */}
          <div className="terms-section contact-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>Email: support@skillhive.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Address: 123 Main Street, City, Country</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>Phone: +1 234 567 8900</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
