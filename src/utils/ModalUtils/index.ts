import { RefObject } from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import { tModalName } from "../../models/Data/Modal/modal"

import { rcIsModalActiveAtom } from "../../recoil/Common"

export const useModalActive = () => {
    const [isModalActive, setIsModalActive] =
        useRecoilState(rcIsModalActiveAtom)
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)

    function handleModalActive(modalName: tModalName, props?: any) {
        if (modalName in isModalActive) {
            const changeModalState = { ...isModalActive }
            changeModalState[modalName] = !isModalActive[modalName]
            changeModalState.isModalOpen = !changeModalState.isModalOpen
            setIsModalActive(changeModalState)
        } else {
            console.log("해당모달명은 없습니다")
        }
    }

    function handleCloseModal(
        ref?: RefObject<HTMLElement>,
        second: number = 150,
    ) {
        if (ref) {
            ref.current!.dataset.close = "true"
        } else {
            const _target = document.querySelector(
                "#modal-root > article",
            ) as HTMLElement

            _target!.dataset.close = "true"
        }

        setTimeout(() => {
            closeModal()
        }, second)
    }

    return { handleModalActive, handleCloseModal }
}
