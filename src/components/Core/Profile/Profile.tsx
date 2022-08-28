import React from "react"
import { iProfile } from "../../../models/Components/Core/profile"
import styles from "./_Profile.module.scss"

function Profile({
    size = "lg",
    src = "https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg",
}: iProfile) {
    return (
        <article className={styles.profile}>
            <section className={styles.con_profileImg} data-c-size={size}>
                <img className={styles.profileImg} src={src} />
            </section>
        </article>
    )
}

export default Profile
