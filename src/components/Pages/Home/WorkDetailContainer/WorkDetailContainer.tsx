import { useState } from "react"
import IconButton from "../../../Core/Button/IconButton"
import styles from "../_home.module.scss"

function WorkDetailContainer() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleContainer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <article className={styles.workDetailContainer} data-click={isOpen}>
            <section className={styles.workDetailContainer__header}>
                <h6>Today work details</h6>
                <IconButton
                    iconName="ri-arrow-up-s-line"
                    variant="transparent"
                    onClick={handleToggleContainer}
                />
            </section>
            <section className={styles.workDetailContainer__body}>body</section>
        </article>
    )
}

export default WorkDetailContainer
