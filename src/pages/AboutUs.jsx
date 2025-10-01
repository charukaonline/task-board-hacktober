import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">About SkillHive</h1>
                    <p className="hero-subtitle">
                        Empowering learners worldwide with cutting-edge skills and knowledge.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="mission-text">
                        At SkillHive, we believe that learning should be accessible, engaging, and transformative.
                        Our mission is to create a vibrant community where individuals can discover, develop, and
                        master new skills that propel them toward their personal and professional goals.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>We strive for the highest quality in everything we do, from course content to user experience.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Community</h3>
                            <p>Learning is better together. We foster a supportive environment where everyone can thrive.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>We continuously evolve our platform to incorporate the latest learning technologies and methodologies.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌍</div>
                            <h3>Accessibility</h3>
                            <p>Quality education should be available to everyone, regardless of background or location.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2 className="section-title">Our Story</h2>
                            <p>
                                Founded in 2024, SkillHive emerged from a simple yet powerful idea: that everyone
                                deserves access to world-class learning opportunities. What started as a small
                                initiative has grown into a thriving platform that serves thousands of learners
                                across the globe.
                            </p>
                            <p>
                                Our team of passionate educators, technologists, and designers work tirelessly
                                to create learning experiences that are not just educational, but truly
                                transformational. We've helped countless individuals transition careers,
                                advance in their fields, and discover new passions.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stat">
                                <div className="stat-number">10,000+</div>
                                <div className="stat-label">Active Learners</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Courses Available</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-placeholder">JS</div>
                            </div>
                            <h3>Jane Smith</h3>
                            <p className="member-role">CEO & Founder</p>
                            <p className="member-bio">
                                Passionate about democratizing education with over 15 years in EdTech.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-placeholder">MJ</div>
                            </div>
                            <h3>Mike Johnson</h3>
                            <p className="member-role">CTO</p>
                            <p className="member-bio">
                                Tech visionary focused on creating scalable learning platforms.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-placeholder">SD</div>
                            </div>
                            <h3>Sarah Davis</h3>
                            <p className="member-role">Head of Content</p>
                            <p className="member-bio">
                                Curriculum expert ensuring all content meets the highest educational standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Join the SkillHive Community</h2>
                        <p>Ready to start your learning journey? Join thousands of learners who are already transforming their careers.</p>
                        <button className="cta-button">Get Started Today</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
