import React from 'react';
import styles from './HomePage.module.css'; // Assume you have corresponding CSS
// Import images from the assets directory
import heroImage from './heroTwo.jpg';
import profileImage from './nhlanhlaProfileImage.jpg';
import ServiceItem from './ServiceItem';

function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to Nkosi Hut</h1>
        <p>Your technology partner for digital transformation.</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>

      {/* Services Overview - Consider adding icons or small animations */}
      <section className={styles.servicesOverview}>
        <h2>Our Services</h2>
        <p>Explore our wide range of technology solutions designed to empower your business.</p>
        <ServiceItem icon="web" title="Web Development" description="Build modern, responsive websites." />
        <ServiceItem icon="mobile" title="Mobile App Development" description="Create engaging mobile experiences." />
        <ServiceItem icon="cloud" title="Cloud Hosting" description="Reliable and scalable cloud solutions." />
      </section>

      {/* About Us - With Team Photo */}
      <section className={styles.aboutUs}>
        <h2>About Us</h2>
        <img src={profileImage} alt="Our Team" className={styles.profileImage} />
        <p>At Nkosi Hut, we're dedicated to helping businesses thrive in the digital age.</p>
      </section>

      {/* Contact CTA */}
      <footer className={styles.contactCta}>
        <p>Ready to transform your business? <a href="/contact">Contact us</a> today to get started.</p>
      </footer>
    </div>
  );
}

export default HomePage;

