import React, { forwardRef, Ref, RefObject, useEffect } from "react"
import { useResetRecoilState } from "recoil"
import { iModalHeader } from "../../models/Components/Layout/modal"
import { rcIsModalActiveAtom } from "../../recoil/Common"
import { useModalActive } from "../../utils/ModalUtils"
import IconButton from "../Core/Button/IconButton"
import styles from "./_Modal.module.scss"

function ModalHeader(
    { name }: iModalHeader,
    ref: React.ForwardedRef<HTMLElement>,
) {
    const { handleCloseModal } = useModalActive()

    return (
        <section className={styles.modalHeader}>
            <h4>{name}</h4>
            <IconButton
                iconName="ri-close-line"
                color="gray"
                onClick={() => {
                    handleCloseModal(ref as RefObject<HTMLElement>)
                }}
            />
        </section>
    )
}

export default forwardRef(ModalHeader)
