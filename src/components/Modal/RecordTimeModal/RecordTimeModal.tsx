import React, { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { iRecordTimeModal } from "../../../models/Components/Layout/modal"
import { rcCurrentDateAtom, rcWorkStatusAtom } from "../../../recoil/Common"
import { useModalActive } from "../../../utils/ModalUtils"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_RecordTimeModal.module.scss"

function RecordTimeModal({ setRender }: iRecordTimeModal) {
    const [workResultTime, setWorkResultTime] = useState([])
    const currentDateAtom = useRecoilValue(rcCurrentDateAtom)
    const [workStatusAtom, setWorkStatusAtom] = useRecoilState(rcWorkStatusAtom)
    const { handleCloseModal } = useModalActive()

    const handleRecordTime = () => {
        const _key = currentDateAtom.format("YYYY-MM-DD")
        const _prev = JSON.parse(localStorage.getItem("workrecord")!)
        console.log(_prev)

        console.log(workStatusAtom)

        if (workStatusAtom === 0) {
            // 출근전
            setWorkStatusAtom(1)
            setRender(true)
            handleCloseModal()
            if (_prev && _prev[_key]) {
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        ..._prev,
                        [_key]: {
                            ..._prev[_key],
                            starttime: currentDateAtom.format("HH:mm"),
                            startworkplace: "test2",
                        },
                    }),
                )
            } else {
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        [_key]: {
                            starttime: currentDateAtom.format("HH:mm"),
                            startworkplace: "test",
                        },
                    }),
                )
            }
        } else if (workStatusAtom === 1) {
            setWorkStatusAtom(2)
            setRender(true)
            handleCloseModal()
            if (_prev && _prev[_key]) {
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        ..._prev,
                        [_key]: {
                            ..._prev[_key],
                            endtime: currentDateAtom.format("HH:mm"),
                            endworkplace: "test2",
                        },
                    }),
                )
            } else {
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        [_key]: {
                            endtime: currentDateAtom.format("HH:mm"),
                            endworkplace: "test",
                        },
                    }),
                )
            }
        } else {
            // 퇴근 후
            handleCloseModal()
            setRender(true)
        }
    }

    const WORK_RECORD = {
        // "2022-09-01": s,
    }

    return (
        <ModalContainer
            className={styles.recordTimeModal}
            name="기록하기"
            type="dialog"
        >
            <article>
                <h3>기록하시겠습니까?</h3>
                <h2>{currentDateAtom.format("YYYYMMDD")}</h2>
                <h2>{`현재 시간 ${currentDateAtom.format("HH : mm")}`}</h2>
            </article>
            <Button buttonName="확인" size="xl" onClick={handleRecordTime} />
        </ModalContainer>
    )
}

export default RecordTimeModal
