"use client"
import React from 'react'
import styles from "./CSS/Login.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.sec1}>
                    <div className={styles.logo}></div>
                    <div className={styles.sec_1_content}>
                        <h1>Travel starts with <br />a click.</h1>
                        <p>Uncover the world's secrets, start your<br /> journey here.</p>
                        {/* <h3>Never miss a Offers With Trek Trails.</h3> */}
                    </div>
                </div>


                <div className={styles.sec2}>

                    <div className={styles.sec_2_content}>
                        <h1>Login In</h1>
                        <form className={styles.form}>
                            <input className={`${styles.inputs} ${"mt-4"}`} type='email' name='email' placeholder='E-mail Id' />
                            <input className={styles.inputs} type='password' name='user_name' placeholder='Create Password' />

                            <button className={styles.bt}>Login</button>
                        </form>
                        <p className={styles.login_link}>Don't have Account <a href='#'>Create Now</a></p>
                    </div>



                </div>
            </div>

        </div>
    )
}
