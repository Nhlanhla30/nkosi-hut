import React from 'react';
import styles from './ServicesPage.module.css';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaCogs } from 'react-icons/fa';

function ServiceItem({ icon, title, description }) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.iconContainer}>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>
      <div className={styles.servicesList}>
        <ServiceItem
          icon={<FaLaptopCode />}
          title="Web Application Development"
          description="Tailored web applications to drive your business forward. From e-commerce solutions to interactive portfolios, we build it all with the latest web technologies."
        />
        <ServiceItem
          icon={<FaMobileAlt />}
          title="Mobile Application Development"
          description="Reach your audience on the go with our mobile app development services. We specialize in creating engaging, user-friendly mobile apps for both Android and iOS platforms."
        />
        <ServiceItem
          icon={<FaCloud />}
          title="Hosting Services"
          description="Reliable and secure hosting solutions to ensure your website and apps are always up and running. Benefit from our fast, scalable hosting services tailored to your needs."
        />
        <ServiceItem
          icon={<FaCogs />}
          title="Technology Solutions"
          description="Comprehensive technology solutions to overcome your business challenges. From system integration to data analytics, we offer a range of services to help you succeed."
        />
      </div>
    </div>
  );
}

export default ServicesPage;

