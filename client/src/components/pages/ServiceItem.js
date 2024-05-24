import React from 'react';
import { IoCodeSlash, IoPhonePortraitOutline, IoCloudOutline } from 'react-icons/io5';
import styles from './ServiceItem.module.css'; // Assume you create CSS for this component

const serviceIcons = {
  web: <IoCodeSlash />,
  mobile: <IoPhonePortraitOutline />,
  cloud: <IoCloudOutline />,
};

function ServiceItem({ icon, title, description }) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.icon}>{serviceIcons[icon]}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
