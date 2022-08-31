import { useRouter } from "next/router"
import React, { forwardRef, useEffect, useRef } from "react"
import { useRecoilValue } from "recoil"
import { iModalContainer } from "../../models/Components/Layout/modal"
import { rcDeviceAtom } from "../../recoil/Common"
import ModalBody from "./ModalBody"
import ModalHeader from "./ModalHeader"
import ModalPortal from "./ModalPortal"
import styles from "./_Modal.module.scss"

function ModalContainer(
    { name, type = "btmsheet", children, className }: iModalContainer,
    ref: React.ForwardedRef<HTMLElement>,
) {
    const router = useRouter()
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    const _ref = useRef<HTMLElement>(null)

    useEffect(() => {
        console.log(ref)
        console.log(_ref)
    }, [])

    return (
        <ModalPortal selector="#modal-root">
            <article
                className={
                    className
                        ? `${styles.modalContainer} ${className}`
                        : `${styles.modalContainer}`
                }
                data-page={router.pathname}
                data-type={type}
                data-device={deviceAtom.device}
                ref={ref ? ref : _ref}
                data-close="false"
            >
                <ModalHeader name={name} ref={ref ? ref : _ref} />
                <ModalBody>{children}</ModalBody>
            </article>
        </ModalPortal>
    )
}

export default forwardRef(ModalContainer)
