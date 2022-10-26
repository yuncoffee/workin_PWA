import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcToDayDateAtom, rcWorkStatusAtom } from "../../../../recoil/Common"
import { useModalActive } from "../../../../utils/ModalUtils"
import { parseStartTimeOnlyToList } from "../../../../utils/WorkUtils"
import Button from "../../../Core/Button/Button"
import styles from "../_home.module.scss"

interface iCheckContainer {
    render: boolean
}

function CheckContainer({ render }: iCheckContainer) {
    const { handleModalActive } = useModalActive()
    const router = useRouter()
    const workStatusAtom = useRecoilValue(rcWorkStatusAtom)
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const [workPlanTime, setWorkPlanTime] = useState<any[]>([])
    const [workResultTime, setWorkResultTime] = useState<any[]>([])

    useEffect(() => {
        if (todayDateAtom && localStorage.getItem("plandata")) {
            const _week = todayDateAtom.day(4).week() // 주차
            const _dayOfWeek = todayDateAtom.day() // 날짜 index
            const _plan = JSON.parse(localStorage.getItem("plandata")!) //plan list object
            const _planResult = _plan[_week] && _plan[_week][_dayOfWeek]
            console.log(_planResult)
            setWorkPlanTime(_planResult)

            const _record = JSON.parse(localStorage.getItem("workdata")!)

            if (_record) {
                // 기록이 있는 경우
                const _key = todayDateAtom.format("YYYY-MM-DD")
                const _recordResult = [
                    _record[_key] &&
                        _record[_key].starttime &&
                        _record[_key].starttime,
                    _record[_key] &&
                        _record[_key].endtime &&
                        _record[_key].endtime,
                ]
                setWorkResultTime(_recordResult)
            } else {
                // 기록이 없을 떄
                console.log("플랜은 있고 기록은 없을 떄")
                setWorkPlanTime(_planResult)
            }
        } else {
            console.log("플랜도 기록도 없을 떄 ")
            setWorkPlanTime(["미설정"])
        }
    }, [render])

    const handleCheckTime = () => {
        // TODO : coffee alert 토스트 처리
        const _plan = localStorage.getItem("plandata")
        if (!_plan) {
            router.push("/schedule")
            return
        }
        if (workStatusAtom !== 2) {
            handleModalActive("recordTimeModal")
        } else {
            alert("근무를 다 했구네요!")
        }
    }

    return (
        <article className={styles.checkContainer}>
            <section className={styles.checkContainer__timeInfo}>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>출근시간</h5>
                    {workResultTime[0] ? (
                        <h2 data-type="default">{workResultTime[0]}</h2>
                    ) : (
                        <h2>
                            {workPlanTime &&
                                parseStartTimeOnlyToList(workPlanTime)[0]}
                        </h2>
                    )}
                </div>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>퇴근시간</h5>
                    {workResultTime[1] ? (
                        <h2 data-type="default">{workResultTime[1]}</h2>
                    ) : (
                        <h2>
                            {workPlanTime &&
                                parseStartTimeOnlyToList(workPlanTime)[1]}
                        </h2>
                    )}
                </div>
            </section>
            <Button buttonName="기록하기" size="xl" onClick={handleCheckTime} />
        </article>
    )
}

export default CheckContainer
