import { useRecoilValue } from "recoil"
import { iRecordTimeModal } from "../../../models/Components/Layout/modal"
import { rcToDayDateAtom, rcWorkStatusAtom } from "../../../recoil/Common"
import { useModalActive } from "../../../utils/ModalUtils"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_RecordTimeModal.module.scss"

function RecordTimeModal({ setRender }: iRecordTimeModal) {
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const workStatusAtom = useRecoilValue(rcWorkStatusAtom)
    const { handleCloseModal } = useModalActive()

    const handleRecordTime = () => {
        const _key = todayDateAtom.format("YYYY-MM-DD")
        const _prev = JSON.parse(localStorage.getItem("workrecord")!)

        if (workStatusAtom === 0) {
            // 출근 전
            if (_prev && _prev[_key]) {
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        ..._prev,
                        [_key]: {
                            ..._prev[_key],
                            starttime: todayDateAtom.format("HH:mm"),
                            startworkplace: "test2",
                            workstatus: 1,
                        },
                    }),
                )
            } else {
                // 맨 처음
                localStorage.setItem(
                    "workrecord",
                    JSON.stringify({
                        ..._prev,
                        [_key]: {
                            starttime: todayDateAtom.format("HH:mm"),
                            startworkplace: "test",
                            workstatus: 1,
                        },
                    }),
                )
            }
        } else if (workStatusAtom === 1) {
            // 출근 후
            localStorage.setItem(
                "workrecord",
                JSON.stringify({
                    ..._prev,
                    [_key]: {
                        ..._prev[_key],
                        endtime: todayDateAtom.format("HH:mm"),
                        endworkplace: "test",
                        workstatus: 2,
                    },
                }),
            )
        } else {
            // 퇴근 후
        }
        setRender(true)
        handleCloseModal()
    }

    return (
        <ModalContainer
            className={styles.recordTimeModal}
            name="기록하기"
            type="dialog"
        >
            <article>
                <h3>기록하시겠습니까?</h3>
                <h2>{todayDateAtom.format("YYYYMMDD")}</h2>
                <h2>{`현재 시간 ${todayDateAtom.format("HH : mm")}`}</h2>
            </article>
            <Button buttonName="확인" size="xl" onClick={handleRecordTime} />
        </ModalContainer>
    )
}

export default RecordTimeModal
