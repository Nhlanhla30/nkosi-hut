import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';
import logo from './pages/logo-no-background.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/"><img src={logo} alt="Nkosi Hut" className={styles.logoImage} /></Link>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showNav : ''}`}>
                <li><Link className={styles.navLink} to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link className={styles.navLink} to="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link className={styles.navLink} to="/about" onClick={toggleMenu}>About Us</Link></li>
                <li><Link className={styles.navLink} to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;





