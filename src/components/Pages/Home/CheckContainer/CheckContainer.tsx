import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import { useModalActive } from "../../../../utils/ModalUtils"
import Button from "../../../Core/Button/Button"
import styles from "../_home.module.scss"

function CheckContainer({}) {
    const { handleModalActive } = useModalActive()

    const [workPlanTime, setWorkPlanTime] = useState([])
    const [workResultTime, setWorkResultTime] = useState<any[]>([])
    const currentDateAtom = useRecoilValue(rcCurrentDateAtom)

    useEffect(() => {
        if (currentDateAtom) {
            const _week = currentDateAtom.day(4).week()
            const _dayOfWeek = currentDateAtom.day()
            const _plan = JSON.parse(localStorage.getItem("plandata")!)
            const _planResult = _plan[_week][_dayOfWeek]

            setWorkPlanTime(_planResult)

            const _record = JSON.parse(localStorage.getItem("workrecord")!)
            if (_record) {
                const _key = currentDateAtom.format("YYYY-MM-DD")
                const _recordResult = [
                    _record[_key].starttime,
                    _record[_key].endtime,
                ]
                setWorkResultTime(_recordResult)
            }
        }
    }, [])

    useEffect(() => {
        console.log(workResultTime)
    }, [workResultTime])

    const handleCheckTime = () => {
        handleModalActive("recordTimeModal")
    }

    const parseWorkData = (workPlanTime: string[]) => {
        switch (workPlanTime[0]) {
            case "휴무":
                return ["휴무", "휴무"]
                break
            case "미설정":
                return ["미설정", "미설정"]
                break
            case "오전 반차":
                return ["오전 반차", "18:00"]
                break
            case "오후 반차":
                return ["09: 00", "오후 반차"]
                break
            default:
                return workPlanTime
                break
        }
    }

    return (
        <article className={styles.checkContainer}>
            <section className={styles.checkContainer__timeInfo}>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>punch in</h5>
                    {workResultTime[0] ? (
                        <h2 data-type="default">{workResultTime[0]}</h2>
                    ) : (
                        <h2>
                            {workPlanTime && parseWorkData(workPlanTime)[0]}
                        </h2>
                    )}
                </div>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>punch out</h5>
                    {workResultTime[1] ? (
                        <h2 data-type="default">{workResultTime[1]}</h2>
                    ) : (
                        <h2>
                            {workPlanTime && parseWorkData(workPlanTime)[1]}
                        </h2>
                    )}
                </div>
            </section>
            <Button buttonName="기록하기" size="xl" onClick={handleCheckTime} />
        </article>
    )
}

export default CheckContainer
