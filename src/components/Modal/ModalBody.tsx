import React from "react"
import { iModalBody } from "../../models/Components/Layout/modal"
import styles from "./_Modal.module.scss"

function ModalBody({ children }: iModalBody) {
    return <section className={styles.modalBody}>{children}</section>
}

export default ModalBody
