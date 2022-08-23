import React from "react"
import { useResetRecoilState } from "recoil"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import Button from "../../../Core/Button/Button"
import IconButton from "../../../Core/Button/IconButton"
import WeeklyCalendar from "./WeeklyCalendar"
import styles from "./_WeeklyPlan.module.scss"
function WeeklyPlanContainer() {
    const resetCurrentDate = useResetRecoilState(rcCurrentDateAtom)

    return (
        <article className={styles.weeklyPlanContainer}>
            <section s-box="h-box" s-justify="space-between">
                <h3>Weekly Plan</h3>
                <IconButton
                    iconName="ri-refresh-line"
                    variant="transparent"
                    onClick={() => {
                        resetCurrentDate()
                    }}
                />
            </section>
            <WeeklyCalendar />
            <Button
                buttonName="ChangePlan"
                onClick={() => {}}
                variant="transparent-line"
            />
        </article>
    )
}

export default WeeklyPlanContainer
