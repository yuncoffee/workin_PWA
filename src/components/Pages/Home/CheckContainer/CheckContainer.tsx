import styles from "../_Home.module.scss"

function CheckContainer() {
    return (
        <article className={styles.checkContainer}>
            <section className={styles.checkContainer__timeInfo}>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>punch in</h5>
                    <h2>10:00</h2>
                </div>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>punch out</h5>
                    <h2>19:00</h2>
                </div>
            </section>
            <button>working!!</button>
        </article>
    )
}

export default CheckContainer
