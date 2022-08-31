import React from "react"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_RecordTimeModal.module.scss"

function RecordTimeModal() {
    const handleRecordTime = () => {
        console.log("Record!")
    }

    return (
        <ModalContainer
            className={styles.recordTimeModal}
            name="기록하기"
            type="dialog"
        >
            <Button buttonName="확인" size="xl" onClick={handleRecordTime} />
        </ModalContainer>
    )
}

export default RecordTimeModal
