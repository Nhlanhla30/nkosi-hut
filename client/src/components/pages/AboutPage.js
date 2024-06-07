import React from 'react';
import styles from './AboutPage.module.css';
import profileImage from './nhlanhlaProfileImage.jpg';

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <section className={styles.aboutIntroSection}>
        <p>
          At Nkosi Hut, we're dedicated to helping businesses thrive in the digital age. Our team of experts specializes in creating tailored web and mobile applications, offering reliable hosting services, and delivering comprehensive technology solutions that drive success.
        </p>
        <p>
          As a startup, we understand the unique challenges and opportunities that come with building a business from the ground up. That's why we're committed to providing innovative solutions and personalized support to help you achieve your goals.
        </p>
      </section>
      
      <section className={styles.aboutTeamSection}>
        <h2>Our Team</h2>
        <div className={styles.aboutTeamMember}>
          <img src={profileImage} alt="Nhlanhla Nkosi" className={styles.aboutProfileImage} />
          <div className={styles.aboutMemberInfo}>
            <h3>Nhlanhla Nkosi</h3>
            <p>Founder & CEO</p>
            <p>
              Nhlanhla Nkosi is a visionary leader with a passion for technology and innovation. With extensive experience in web and mobile application development, Nhlanhla founded Nkosi Hut to help businesses leverage digital solutions for growth and success.
            </p>
          </div>
        </div>
        {/* Add more team members here if needed */}
      </section>

      <section className={styles.aboutMissionSection}>
        <h2>Our Mission</h2>
        <p>
          Our mission at Nkosi Hut is to empower businesses through innovative technology solutions. We aim to provide high-quality services that help our clients achieve their business objectives and thrive in the competitive digital landscape.
        </p>
      </section>

      <section className={styles.aboutValuesSection}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We strive to stay ahead of the curve by continuously exploring new technologies and solutions.</li>
          <li><strong>Integrity:</strong> We believe in building trust with our clients through transparency and honesty.</li>
          <li><strong>Excellence:</strong> We are committed to delivering high-quality services that exceed our clients' expectations.</li>
          <li><strong>Collaboration:</strong> We work closely with our clients to understand their needs and develop solutions that drive success.</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;

