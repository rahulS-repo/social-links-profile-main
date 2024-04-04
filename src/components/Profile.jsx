import React from 'react'
import styles from "./Profile.module.css";
function Profile() {
  return (
    <section className={styles['profile-section']}>
        <section className={styles['profile-section__top']}>
            <img className={styles['profile-section__img']} src="./src/assets/images/avatar-jessica.jpeg" alt="profile image" />
            <div className={styles['profile-section__heading-group']}>
                <h1>Jessica Randall</h1>
                <h3>London, United Kingdom</h3>
            </div>
            <p className={styles['profile-section__summary']}>&quot;Front-end developer and avid reader.&quot;</p>
        </section>
        <section className={styles['profile-section__bottom']}>
        <button className={styles['profile-section__social-links']}>GitHub</button>
        <button className={styles['profile-section__social-links']}>Frontend Mentor</button>
        <button className={styles['profile-section__social-links']}>LinkedIn</button>
        <button className={styles['profile-section__social-links']}>Twitter</button>
        <button className={styles['profile-section__social-links']}>Instagram</button>
        </section>
    </section>
  )
}

export default Profile