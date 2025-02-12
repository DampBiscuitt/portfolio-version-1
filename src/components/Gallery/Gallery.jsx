import styles from "./Gallery.module.css";
import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight, CircleDot, Circle} from "lucide-react";

import photo1 from "./imgs/BlueMountain1.jpg"
import photo2 from "./imgs/Kyoto1.jpg"
import car3 from "./imgs/car-3.jpg"
import car4 from "./imgs/car-4.jpg"
import car5 from "./imgs/car-5.jpg"

const IMAGES = [
  { url: photo1, 
    location: "Katoomba Falls, Blue Mountains NSW", 
    date: "2023", description: "I LOVE! One of my favourite hikes ever. Short and gruelling but truly rewarding. The hike is only about 1.5hrs down and up the mountain but it is all stairs so it's decievingly easy on the way down... I could not push through without breaks." },
  { url: photo2, alt: "Japan" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

export const Gallery = () => {

    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
    }

    function showNextImage() {
        setImageIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.imageSlide}>
                <div className={styles.container}>
                <div className={styles.whiteRectangle}></div>
                <div className={styles.photoSlider}>
                    {IMAGES.map((image, index) => (
                        <img 
                        key={image.url}
                        src={image.url} 
                        className={styles.picture} 
                        style={{ transform: `translateX(${-100 * imageIndex}%)` }}/>
                    ))}
                </div>
                            
                <button 
                onClick={showPrevImage} 
                className={styles.imgSliderBtn} 
                style={{left: "0"}}
                > 
                    <ArrowBigLeft /> 
                </button>
                <button
                onClick={showNextImage}
                className={styles.imgSliderBtn}
                style={{right: "0"}}
                > 
                    <ArrowBigRight />
                </button>
                <div className={styles.imgCounter}>
                    {IMAGES.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setImageIndex(index)} 
                          className={styles.circleBtn}
                        >
                            {index === imageIndex ? <CircleDot /> :  <Circle />}
                        </button>
                    ))}
                
                </div>
            </div>
            </div>

            <div className={styles.galleryText}>
              <h1 className={styles.galleryTitle}>{IMAGES[imageIndex].location}</h1>
              <h4>{IMAGES[imageIndex].date}</h4>
              <p>{IMAGES[imageIndex].description}</p>
            </div>
        </div>
    );
};


// import { useState } from "react";
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

// export function ImageSlider({ imageUrls }) {
//   const [imageIndex, setImageIndex] = useState(0);

//   return (
//     <div>
//       <img src={imageUrls[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
//       <button onClick={() => setImageIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1))}>
//         <ArrowBigLeft />
//       </button>
//       <button onClick={() => setImageIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1))}>
//         <ArrowBigRight />
//       </button>
//     </div>
//   );
// }
