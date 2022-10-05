import dayjs from "dayjs"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { reqCurrentAddress } from "../../../api/NaverMap"
import { iRecordTimeModal } from "../../../models/Components/Layout/modal"
import { iWorkdata } from "../../../models/Data/FireBase/workData"
import {
    rcCurrentAddressAtom,
    rcCurrentLocationAtom,
    rcToDayDateAtom,
    rcWorkStatusAtom,
} from "../../../recoil/Common"
import {
    INIT_WORK_DATA,
    reqUpdateWorkData,
    setLocalWorkdata,
} from "../../../utils/Firebase/workdata"
import { useModalActive } from "../../../utils/ModalUtils"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_RecordTimeModal.module.scss"

function RecordTimeModal({ setRender }: iRecordTimeModal) {
    const [todayDateAtom, setTodayDateAtom] = useRecoilState(rcToDayDateAtom)
    const workStatusAtom = useRecoilValue(rcWorkStatusAtom)
    const currentLocation = useRecoilValue(rcCurrentLocationAtom)
    const currentAddress = useRecoilValue(rcCurrentAddressAtom)
    const { handleCloseModal } = useModalActive()
    useEffect(() => {
        console.log(dayjs())
        setTodayDateAtom(dayjs())
    }, [])

    const handleRecordTime = () => {
        const _key = todayDateAtom.format("YYYY-MM-DD")
        const _prev = JSON.parse(localStorage.getItem("workdata")!)

        const _plan = JSON.parse(localStorage.getItem("plandata")!)[
            todayDateAtom.day(4).week()
        ][todayDateAtom.day()]

        if (workStatusAtom < 1) {
            // 출근 전
            if (_prev && _prev[_key]) {
                console.log("출근은 안찍고 근무정보만 바꾸었구나")
                const _data = {
                    ..._prev[_key],
                    starttime: todayDateAtom.format("HH:mm"),
                    startworkplace: currentLocation.coordinate,
                    workstatus: 1,
                    planstarttime: _plan[0],
                    planendtime: _plan[1],
                    workaddress: [currentAddress],
                }
                reqUpdateWorkData(_key, _data).then(() => {
                    setLocalWorkdata()
                    setRender(true)
                    handleCloseModal()
                })
                return
            } else {
                // 맨 처음
                const _data = {
                    ...INIT_WORK_DATA,
                    starttime: todayDateAtom.format("HH:mm"),
                    startworkplace: currentLocation.coordinate,
                    workstatus: 1,
                    planstarttime: _plan[0],
                    planendtime: _plan[1],
                    workaddress: [currentAddress],
                }
                reqUpdateWorkData(_key, _data).then(() => {
                    setLocalWorkdata()
                    setRender(true)
                    handleCloseModal()
                })
            }
        } else if (workStatusAtom === 1) {
            // 출근 후
            const _data = {
                ..._prev[_key],
                endtime: todayDateAtom.format("HH:mm"),
                endworkplace: currentLocation.coordinate,
                workstatus: 2,
                workaddress: [..._prev[_key].workaddress, currentAddress],
            }
            console.log(_data)
            reqUpdateWorkData(_key, _data).then(() => {
                setLocalWorkdata()
                setRender(true)
                handleCloseModal()
            })
        } else {
            // 퇴근 후
            console.log(workStatusAtom)
            console.log("더 이상 찍을 수 없어!")
            setRender(true)
            handleCloseModal()
        }
    }

    const testFunc = () => {
        const _key = todayDateAtom.format("YYYY-MM-DD")
        const _data = {
            ...INIT_WORK_DATA,
            starttime: todayDateAtom.format("HH:mm"),
        }
        console.log(_data)
        reqUpdateWorkData(_key, _data)
    }

    return (
        <ModalContainer
            className={styles.recordTimeModal}
            name="기록하기"
            type="dialog"
        >
            <div s-divider="line" />
            <h4 s-text-align="center">{"현재 시간을 기록하시렵니까?"}</h4>
            <article className={styles.modalContents}>
                <div s-divider="line" />
                <h3>{todayDateAtom.format("YYYY.MM.DD")}</h3>
                <div className={styles.modalContents__item}>
                    <div s-divider="line" />
                    <h2>{todayDateAtom.format("HH:mm")}</h2>
                    <div s-divider="line" />
                </div>
            </article>

            <Button
                className={styles.button}
                buttonName="확인"
                size="xl"
                onClick={() => {
                    // testFunc()
                    handleRecordTime()
                }}
            />
        </ModalContainer>
    )
}

export default RecordTimeModal
