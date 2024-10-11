"use client"
import React, { useState } from 'react';
import styles from './CSS/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons'




export const Navbar = () => {

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
    <div className={visible? styles.body : styles.body_invisible}>
        <div className={`${styles.logo} ${"text-light"}`}>LOGO</div>
        <button className={styles.menu}><FontAwesomeIcon icon={faBarsStaggered} /> Menu</button>
    </div>
  )
}
