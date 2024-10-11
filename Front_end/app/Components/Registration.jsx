"use client"
import React from 'react'
import styles from "./CSS/Registration.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Registration = () => {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.sec1}>
          <div className={styles.logo}></div>
          <div className={styles.sec_1_content}>
            <h1>Travel starts with <br/>a click.</h1>
            <p>Uncover the world's secrets, start your<br/> journey here.</p>
            {/* <h3>Never miss a Offers With Trek Trails.</h3> */}
          </div>
        </div>


        <div className={styles.sec2}>

          <div className={styles.sec_2_content}>
            <h1>Create a account</h1>
            <form className={styles.form}>
              <input className={`${styles.inputs} ${"mt-4"}`} type='text' name='user_name' placeholder='Full Name' />
              <input className={styles.inputs} type='email' name='email' placeholder='E-mail Id' />
              <input className={styles.inputs} type='password' name='user_name' placeholder='Create Password' />
              <input className={styles.inputs} type='password' name='user_name' placeholder='Repeat Password' />
              <div className={styles.agree}>
                <input className='m-2' type='checkbox' name='policy' value='yes' />
                <label>I Accept the <b>Privacy policy</b></label>
              </div>

              <button className={styles.bt}>Create an account</button>

            </form>
            <p className={styles.login_link}>Already have Account <a href='#'>Log in</a></p>
          </div>



        </div>
      </div>

    </div>
  )
}
