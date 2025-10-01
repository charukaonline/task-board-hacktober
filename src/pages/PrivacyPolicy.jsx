import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Privacy Policy</h1>
                    <p className="hero-subtitle">
                        Your privacy is important to us. Learn how we collect, use, and protect your information.
                    </p>
                    <p className="last-updated">Last updated: October 1, 2025</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="content-section">
                <div className="container">
                    {/* Introduction */}
                    <div className="policy-section">
                        <h2>Introduction</h2>
                        <p>
                            Welcome to SkillHive ("we," "our," or "us"). This Privacy Policy explains how we collect, 
                            use, disclose, and safeguard your information when you visit our website and use our services. 
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                            policy, please do not access the site.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div className="policy-section">
                        <h2>Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>We may collect personal information that you provide directly to us, including:</p>
                        <ul>
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Account credentials (username, password)</li>
                            <li>Profile information and preferences</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Communication data when you contact us</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect certain information, including:</p>
                        <ul>
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website addresses</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </div>

                    {/* How We Use Information */}
                    <div className="policy-section">
                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect for various purposes, including:</p>
                        <ul>
                            <li>Providing and maintaining our services</li>
                            <li>Processing transactions and sending related information</li>
                            <li>Sending administrative information and updates</li>
                            <li>Responding to your comments, questions, and requests</li>
                            <li>Personalizing your experience on our platform</li>
                            <li>Improving our website and services</li>
                            <li>Monitoring and analyzing usage and trends</li>
                            <li>Detecting and preventing fraudulent activity</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </div>

                    {/* Information Sharing */}
                    <div className="policy-section">
                        <h2>How We Share Your Information</h2>
                        <p>We may share your information in the following circumstances:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            <li><strong>Consent:</strong> With your explicit consent or at your direction</li>
                        </ul>
                        <p>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
                    </div>

                    {/* Data Security */}
                    <div className="policy-section">
                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your 
                            personal information against unauthorized access, alteration, disclosure, or destruction. 
                            However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                        </p>
                        <div className="security-measures">
                            <h3>Our security measures include:</h3>
                            <ul>
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and authentication protocols</li>
                                <li>Employee training on data protection</li>
                            </ul>
                        </div>
                    </div>

                    {/* Your Rights */}
                    <div className="policy-section">
                        <h2>Your Privacy Rights</h2>
                        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                        <ul>
                            <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            <li><strong>Objection:</strong> Object to processing of your personal information</li>
                            <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the information provided below.</p>
                    </div>

                    {/* Cookies */}
                    <div className="policy-section">
                        <h2>Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your browsing experience, 
                            analyze site traffic, and understand where our visitors are coming from. You can control 
                            cookies through your browser settings, but disabling cookies may affect site functionality.
                        </p>
                        <div className="cookie-types">
                            <h3>Types of cookies we use:</h3>
                            <ul>
                                <li><strong>Essential cookies:</strong> Necessary for basic site functionality</li>
                                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
                                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                            </ul>
                        </div>
                    </div>

                    {/* Third-Party Services */}
                    <div className="policy-section">
                        <h2>Third-Party Services</h2>
                        <p>
                            Our website may contain links to third-party websites or integrate with third-party services. 
                            We are not responsible for the privacy practices of these external sites. We encourage you 
                            to review the privacy policies of any third-party services you use.
                        </p>
                    </div>

                    {/* Children's Privacy */}
                    <div className="policy-section">
                        <h2>Children's Privacy</h2>
                        <p>
                            Our services are not intended for children under the age of 13. We do not knowingly collect 
                            personal information from children under 13. If you are a parent or guardian and believe 
                            your child has provided us with personal information, please contact us so we can delete 
                            such information.
                        </p>
                    </div>

                    {/* Changes to Policy */}
                    <div className="policy-section">
                        <h2>Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by 
                            posting the new Privacy Policy on this page and updating the "Last updated" date at the top 
                            of this policy. Your continued use of our services after any modifications constitutes 
                            acceptance of the updated Privacy Policy.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="policy-section contact-section">
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our privacy practices, 
                            please contact us:
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>Email: privacy@skillhive.com</span>
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

export default PrivacyPolicy;