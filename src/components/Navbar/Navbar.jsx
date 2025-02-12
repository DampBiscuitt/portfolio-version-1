import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>SKVT</a>
      <div className={styles.menu}>
        <button className={styles.menubtn} onClick={toggleMenu}>
          <img src={getImageUrl("nav/menuIcon.png")} alt="Menu" />
        </button>
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};