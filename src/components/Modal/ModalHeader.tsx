import React from "react"
import { useResetRecoilState } from "recoil"
import { iModalHeader } from "../../models/Components/Layout/modal"
import { rcIsModalActiveAtom } from "../../recoil/Common"
import IconButton from "../Core/Button/IconButton"
import styles from "./_Modal.module.scss"

function ModalHeader({ name }: iModalHeader) {
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)

    const handleCloseModal = () => {
        closeModal()
    }

    return (
        <section className={styles.modalHeader}>
            <h4>{name}</h4>
            <IconButton
                iconName="ri-close-line"
                color="gray"
                onClick={handleCloseModal}
            />
        </section>
    )
}

export default ModalHeader
