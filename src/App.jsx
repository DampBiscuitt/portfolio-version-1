import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Subtitles } from 'lucide-react';

// import car1 from "./imgs/car-1.jpg"
// import car2 from "./imgs/car-2.jpg"
// import car3 from "./imgs/car-3.jpg"
// import car4 from "./imgs/car-4.jpg"
// import car5 from "./imgs/car-5.jpg"

// const IMAGES = [
//   { url: car1, alt: "Car One" },
//   { url: car2, alt: "Car Two" },
//   { url: car3, alt: "Car Three" },
//   { url: car4, alt: "Car Four" },
//   { url: car5, alt: "Car Five" },
// ];

const App = () => {
  return (
    <div className="size-full bg-black">
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
