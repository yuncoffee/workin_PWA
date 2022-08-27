import React, { useState } from "react"
import { iMemberInfo } from "../../../../../models/Components/Pages/Team"
import WeeklyTimeContainer from "../../../Schedule/WeeklyPlan/WeeklyTimeContainer"
import styles from "./_MemberInfo.module.scss"

function MemberInfo({ member }: iMemberInfo) {
    const [weekPlanData, setWeekPlanData] = useState([
        ["휴무"],
        ["09:00", "18:00"],
        ["미설정"],
        ["10:00", "19:00"],
        ["09:00", "18:00"],
        ["08:30", "17:30"],
        ["휴무"],
    ])

    return (
        <article className={styles.memberInfo}>
            <section className={styles.memberInfo__header}>
                <h4>{member}</h4>
            </section>
            <section className={styles.memberInfo__body}>
                <WeeklyTimeContainer weekData={weekPlanData} />
            </section>
        </article>
    )
}

export default MemberInfo
