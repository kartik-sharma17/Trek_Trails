import React from 'react'
import styles from '../Components/CSS/Demo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faFilePdf } from '@fortawesome/free-regular-svg-icons'

export const Demo = () => {
  return (
    <div className={styles.body}>
      <section className={`${styles.section} ${styles.section0}`}>
        <h1>Demonstration <FontAwesomeIcon icon={faPaperPlane} /></h1>
        <button className={styles.skip_demo_btn}>Skip Demo</button>
      </section>
      <section className={`${styles.section1} ${styles.section}`}>
        <h1>Trippy</h1>
        <h4>Advance Tool for Trip Planning And Budget estimation</h4>
        <h6>With the power of Artificial Intelligence (AI)</h6>
        <button className={styles.explore_btn}>Explore</button>
      </section>
      <section className={`${styles.section2} ${styles.section}`}>
        <h1>How It's Work</h1>
        <h3>Enter The Basic Details Like -</h3>
        <h5>Trip Starting Point,</h5>
        <h5>Destination,</h5>
        <h5>No. of People,</h5>
        <h5>Mode of Transpotation, etc</h5>
      </section>
      <section className={`${styles.section3} ${styles.section}`}>
        <h1>Get The Completed Road Map <FontAwesomeIcon icon={faFilePdf} /></h1>
        <h3>With Budget Breakdown</h3>
      </section>
    </div>
  )
}
