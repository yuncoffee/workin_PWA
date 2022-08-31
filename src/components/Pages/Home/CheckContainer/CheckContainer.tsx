import { useModalActive } from "../../../../utils/ModalUtils"
import Button from "../../../Core/Button/Button"
import styles from "../_home.module.scss"

function CheckContainer() {
    const { handleModalActive } = useModalActive()

    const handleCheckTime = () => {
        handleModalActive("recordTimeModal")
    }

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
            <Button buttonName="기록하기" size="xl" onClick={handleCheckTime} />
        </article>
    )
}

export default CheckContainer
