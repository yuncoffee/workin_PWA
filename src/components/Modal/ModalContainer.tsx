import { useRouter } from "next/router"
import React from "react"
import { useRecoilValue } from "recoil"
import { iModalContainer } from "../../models/Components/Layout/modal"
import { rcDeviceAtom } from "../../recoil/Common"
import ModalBody from "./ModalBody"
import ModalHeader from "./ModalHeader"
import ModalPortal from "./ModalPortal"
import styles from "./_Modal.module.scss"

function ModalContainer({ name, children, className }: iModalContainer) {
    const router = useRouter()
    const deviceAtom = useRecoilValue(rcDeviceAtom)
    return (
        <ModalPortal selector="#modal-root">
            <article
                className={
                    className
                        ? `${styles.modalContainer} ${className}`
                        : `${styles.modalContainer}`
                }
                data-page={router.pathname}
                data-device={deviceAtom.device}
            >
                <ModalHeader name={name} />
                <ModalBody>{children}</ModalBody>
            </article>
        </ModalPortal>
    )
}

export default ModalContainer
