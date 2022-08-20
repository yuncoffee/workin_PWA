import IconButton from "../../../Core/Button/IconButton"
import styles from "../_home.module.scss"

function NoticeContainer() {
    return (
        <article className={styles.noticeContainer}>
            <h5>[Notice] Hello Everybody...</h5>
            <IconButton
                iconName="ri-arrow-right-s-line"
                variant="transparent"
                onClick={() => {}}
            />
        </article>
    )
}

export default NoticeContainer
