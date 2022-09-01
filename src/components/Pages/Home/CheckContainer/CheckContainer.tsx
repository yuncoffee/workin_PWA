import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcToDayDateAtom } from "../../../../recoil/Common"
import { useModalActive } from "../../../../utils/ModalUtils"
import { parseStartTimeOnlyToList } from "../../../../utils/WorkUtils"
import Button from "../../../Core/Button/Button"
import styles from "../_home.module.scss"

function CheckContainer() {
    const { handleModalActive } = useModalActive()
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const [workPlanTime, setWorkPlanTime] = useState([])
    const [workResultTime, setWorkResultTime] = useState<any[]>([])

    useEffect(() => {
        if (todayDateAtom && localStorage.getItem("plandata")) {
            const _week = todayDateAtom.day(4).week() // 주차
            const _dayOfWeek = todayDateAtom.day() // 날짜 index
            const _plan = JSON.parse(localStorage.getItem("plandata")!) //plan list object
            const _planResult = _plan[_week][_dayOfWeek]
            setWorkPlanTime(_planResult)

            const _record = JSON.parse(localStorage.getItem("workrecord")!)
            if (_record) {
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
            }
        }
    }, [])

    const handleCheckTime = () => {
        handleModalActive("recordTimeModal")
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
                            {workPlanTime &&
                                parseStartTimeOnlyToList(workPlanTime)[0]}
                        </h2>
                    )}
                </div>
                <div className={styles.checkContainer__timeInfoItem}>
                    <h5>punch out</h5>
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
