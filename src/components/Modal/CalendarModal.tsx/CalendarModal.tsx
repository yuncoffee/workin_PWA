import dayjs from "dayjs"
import React, { useState } from "react"
import { useResetRecoilState, useSetRecoilState } from "recoil"
import { rcCurrentDateAtom, rcIsModalActiveAtom } from "../../../recoil/Common"
import Calendar from "../../Calendar/Calendar"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_CalendarModal.module.scss"

function CalendarModal() {
    const [selectDate, setSelectDate] = useState(dayjs())
    const setCurrentDateAtom = useSetRecoilState(rcCurrentDateAtom)
    const clseModal = useResetRecoilState(rcIsModalActiveAtom)
    const handleSelectDateButton = () => {
        setCurrentDateAtom(selectDate)
        clseModal()
    }

    return (
        <ModalContainer className={styles.calendarModal} name="캘린더">
            <Calendar selectDate={selectDate} setSelectDate={setSelectDate} />
            <Button
                buttonName="날짜선택"
                size="lg"
                length="100%"
                onClick={handleSelectDateButton}
            />
        </ModalContainer>
    )
}

export default CalendarModal
