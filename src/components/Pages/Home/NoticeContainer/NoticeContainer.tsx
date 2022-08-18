import styles from "../_home.module.scss"

function NoticeContainer() {
    return (
        <article className={styles.noticeContainer}>
            <h5>[Notice] Hello Everybody...</h5>
            <button>&gt;</button>
        </article>
    )
}

export default NoticeContainer
