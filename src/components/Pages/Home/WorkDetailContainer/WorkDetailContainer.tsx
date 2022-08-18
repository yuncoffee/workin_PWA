import styles from "../_Home.module.scss"

function WorkDetailContainer() {
    return (
        <article className={styles.workDetailContainer}>
            <section className={styles.workDetailContainer__header}>
                <h6>Today work details</h6>
                <button>ㅅ</button>
            </section>
            <section>body</section>
        </article>
    )
}

export default WorkDetailContainer
