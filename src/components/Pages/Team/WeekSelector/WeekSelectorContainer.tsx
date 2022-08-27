import React, { BaseSyntheticEvent } from "react"
import { useResetRecoilState } from "recoil"
import { iWeekSelectorContainer } from "../../../../models/Components/Pages/Team"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import ButtonGroup from "../../../Core/Button/ButtonGroup"
import IconButton from "../../../Core/Button/IconButton"
import WeeklyCalendar from "../../Schedule/WeeklyPlan/WeeklyCalendar"
import styles from "./_WeekSelector.module.scss"

function WeekSelectorContainer({ tab, setTab }: iWeekSelectorContainer) {
    const TAB_BUTTONS = ["업무 계획", "업무 결과"]
    const resetCurrentDate = useResetRecoilState(rcCurrentDateAtom)

    const handleCalendarButton = () => {
        console.log("hello")
    }
    const handleRefreshButton = () => {
        resetCurrentDate()
    }

    return (
        <article className={styles.weekSelectorContainer}>
            <ButtonGroup
                selected={TAB_BUTTONS[tab]}
                size="xs"
                buttonNameList={TAB_BUTTONS}
                onClick={(event: BaseSyntheticEvent) => {
                    const index = event.target.dataset.index

                    setTab && setTab(index)
                }}
            />
            <section s-box="h-box" s-justify="space-between">
                <h3>부서별 근무조회</h3>
                <div s-box="h-box" s-gap="4px">
                    <IconButton
                        iconName="ri-calendar-line"
                        variant="transparent"
                        onClick={handleCalendarButton}
                    />
                    <IconButton
                        iconName="ri-refresh-line"
                        variant="transparent"
                        onClick={handleRefreshButton}
                    />
                </div>
            </section>
            <WeeklyCalendar>{<div />}</WeeklyCalendar>
        </article>
    )
}

export default WeekSelectorContainer
