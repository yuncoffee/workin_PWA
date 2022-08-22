import React from "react"
import Button from "../../../Core/Button/Button"
import WeeklyCalendar from "./WeeklyCalendar"
import styles from "./_WeeklyPlan.module.scss"
function WeeklyPlanContainer() {
    return (
        <article className={styles.weeklyPlanContainer}>
            <h3>Weekly Plan</h3>
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
