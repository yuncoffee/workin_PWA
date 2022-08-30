import { useRecoilState } from "recoil"
import { tModalName } from "../../models/Data/Modal/modal"

import { rcIsModalActiveAtom } from "../../recoil/Common"

export const useModalActive = () => {
    const [isModalActive, setIsModalActive] =
        useRecoilState(rcIsModalActiveAtom)

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

    return { handleModalActive }
}
