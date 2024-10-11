import React from 'react';
import styles from './CSS/Introduction.module.css';


// for animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


export const Introduction = () => {


  return (
    <div className={styles.body}>
        <div className={styles.text}>   
            {/* <p>With Trippy</p> */}
            <h1 data-aos="zoom-out-down"><span className={styles.span}>Explore</span> the World</h1>
        </div>
    </div>
  )
}
