import React from "react";
import styles from './ServicesPage.module.css';

function ServiceItem({ title, description, cta }) {
    return (
      <div className={styles.serviceItem}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => alert(`${cta} for ${title}`)}>
          {cta}
        </button>
      </div>
    );
  }

function ServicesPage(){
    return (
        <div className={styles.container}>
          <h1>Our Services</h1>
          <div className={styles.servicesList}>
            <ServiceItem
              title="Web Application Development"
              description="Tailored web applications to drive your business forward. From e-commerce solutions to interactive portfolios, we build it all with the latest web technologies."
              cta="Learn More"
            />
            <ServiceItem
              title="Mobile Application Development"
              description="Reach your audience on the go with our mobile app development services. We specialize in creating engaging, user-friendly mobile apps for both Android and iOS platforms."
              cta="Get Started"
            />
            <ServiceItem
              title="Hosting Services"
              description="Reliable and secure hosting solutions to ensure your website and apps are always up and running. Benefit from our fast, scalable hosting services tailored to your needs."
              cta="Discover More"
            />
            <ServiceItem
              title="Technology Solutions"
              description="Comprehensive technology solutions to overcome your business challenges. From system integration to data analytics, we offer a range of services to help you succeed."
              cta="Contact Us"
            />
          </div>
        </div>
      );
    
}

export default ServicesPage;