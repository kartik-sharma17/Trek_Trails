"use client"
import React, { useState } from 'react'
import styles from '../Components/CSS/Front.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faComments } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export const Front = () => {
  const [visible,Setvisible] = useState(true)

  const change_navbar = () =>{
    if(window.scrollY >= 1100){
      Setvisible(false)
    }
    else{
      Setvisible(true)
    }
  }

  window.addEventListener("scroll",change_navbar)


  return (
    <div className={styles.body}>
      <div className={styles.text}>
        <h1><span className={styles.span}>Map Your</span><br/>Journey <br/> with<br/>Ease</h1>
        <div className={styles.car}></div>
        
      </div>
      <div className={visible ? styles.bottom_text :styles.bottom_text_invisible }>
        <div className={styles.icons}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
          <FontAwesomeIcon className={styles.icon} icon={faXTwitter} />
        </div>
        <p>Advance Trip Planning And budget Estimation Tool</p>
        <div className={styles.notification}>
          <button><FontAwesomeIcon icon={faComments} /> Get Notification</button>
        </div>
      </div>
    </div>
  )
}
