import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // Assume you have corresponding CSS
// Import images from the assets directory
import heroImage from './heroFive.jpg';
import profileImage from './nhlanhlaProfileImage.jpg';
import ServiceItem from './ServiceItem';

function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to Nkosi Hut</h1>
        <p>Your technology partner for digital transformation.</p>
        <Link to="/services" className={styles.heroButton}>Explore Services</Link>
      </div>

      {/* Services Overview - Consider adding icons or small animations */}
      <section className={styles.servicesOverview}>
        <h2>Our Services</h2>
        <p>Explore our wide range of technology solutions designed to empower your business.</p>
        <ServiceItem icon="web" title="Web Development" description="Build modern, responsive websites." />
        <ServiceItem icon="mobile" title="Mobile App Development" description="Create engaging mobile experiences." />
        <ServiceItem icon="cloud" title="Cloud Hosting" description="Reliable and scalable cloud solutions." />
      </section>

       {/* About Us */}
       <section className={styles.aboutUs}>
        <h2>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.placeholderImage}>
            <i className="fas fa-users" style={{ fontSize: '150px', color: '#008037' }}></i>
          </div>
          <div className={styles.textContent}>
            <p>
              At Nkosi Hut, we're dedicated to helping businesses thrive in the digital age. 
              Our team of experts specializes in creating tailored web and mobile applications, 
              offering reliable hosting services, and delivering comprehensive technology solutions 
              that drive success.
            </p>
            <p>
              As a startup, we understand the unique challenges and opportunities that come with 
              building a business from the ground up. That's why we're committed to providing 
              innovative solutions and personalized support to help you achieve your goals.
            </p>
            <p>
              Join us on this journey and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>Ready to transform your business? <Link to="/contact" className={styles.contactLink}>Contact us</Link> today to get started.</p>
      </section>
    </div>
  );
}

export default HomePage;

