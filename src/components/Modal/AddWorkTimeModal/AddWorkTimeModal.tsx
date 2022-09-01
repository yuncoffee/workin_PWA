import React from "react"
import { useModalActive } from "../../../utils/ModalUtils"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"

function AddWorkTimeModal() {
    const { handleCloseModal } = useModalActive()

    return (
        <ModalContainer className="" name="근무지 이동" type="dialog">
            <article>
                <h3>준비중입니다..!</h3>
            </article>
            <Button
                buttonName="확인"
                size="xl"
                onClick={() => {
                    handleCloseModal()
                }}
            />
        </ModalContainer>
    )
}

export default AddWorkTimeModal
