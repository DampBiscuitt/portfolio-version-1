import React, { useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { Particles } from '../Particles/particles'; // Correct import path

export const Hero = () => {
  useEffect(() => {
    console.log("Hero component rendered");
  }, []);

  const openResume = () => {
    const pdfUrl = '/resume/ST_Resume.pdf'; // Correct path for public files
    window.open(pdfUrl, '_blank');
  };

  const sendEmail = () => {
    const emailUrl = 'mailto:z5487891@unsw.edu.au'; // Correct path for public files
    window.open(emailUrl, '_blank');
  };

  return (
    <>
      <Particles />
      <section className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>🌻 Hello there! I'm Sandy {':^)'},</p>
          <h1 className={styles.title}><b>Computer Science and Actuarial Studies student at UNSW</b> with a passion to learn & explore.</h1>
          <p className={styles.description}>
            In the midst of my studies, I meander through opportunities, still searching for my path.
            What I do know, however, is that I love learning about cultures, discovering new hobbies,
            and finding inspiration in others—I’d love to hear from you!
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/sandyktran/" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("social/LinkedIn.png")} alt="LinkedIn" />
            </a>
            <a onClick={sendEmail} style={{ cursor: 'pointer' }}>
              <img src={getImageUrl("social/Email.png")} alt="Email" />
            </a>
            <a href="https://open.spotify.com/user/transandy37?si=9a96572ed59e463a" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("social/Spotify.png")} alt="GitHub" />
            </a>
            <a onClick={openResume} style={{ cursor: 'pointer' }}>
              <img src={getImageUrl("social/Document.png")} alt="Resume" />
            </a>
          </div>
        </div>

        <div className={styles.heroImgContainer}>
          <img src={getImageUrl("hero/Me_photo.png")} alt="Picture of me!" className={styles.heroImg} />
          {/* <img src={getImageUrl("hero/White_square.png")} alt="White Square 1" className={styles.square1}/> */}
          <img src={getImageUrl("hero/White_square.png")} alt="White Square 2" className={styles.square2} />
        </div>
        
      </section>
    </>
  );
};