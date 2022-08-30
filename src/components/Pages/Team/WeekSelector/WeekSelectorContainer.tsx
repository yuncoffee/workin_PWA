import React, { BaseSyntheticEvent } from "react"
import { useResetRecoilState } from "recoil"
import { iWeekSelectorContainer } from "../../../../models/Components/Pages/Team"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import { useModalActive } from "../../../../utils/ModalUtils"
import BasicContainer from "../../../Container/BasicContainer"
import ButtonGroup from "../../../Core/Button/ButtonGroup"
import IconButton from "../../../Core/Button/IconButton"
import WeeklyCalendar from "../../Schedule/WeeklyPlan/WeeklyCalendar"
import styles from "./_WeekSelector.module.scss"

function WeekSelectorContainer({ tab, setTab }: iWeekSelectorContainer) {
    const TAB_BUTTONS = ["업무 계획", "업무 결과"]
    const resetCurrentDate = useResetRecoilState(rcCurrentDateAtom)
    const { handleModalActive } = useModalActive()

    const handleCalendarButton = () => {
        console.log("hello")
        handleModalActive("calendarModal")
    }
    const handleRefreshButton = () => {
        resetCurrentDate()
    }

    return (
        <BasicContainer
            tab={
                <ButtonGroup
                    selected={TAB_BUTTONS[tab]}
                    size="xs"
                    buttonNameList={TAB_BUTTONS}
                    onClick={(event: BaseSyntheticEvent) => {
                        const index = event.target.dataset.index
                        setTab && setTab(index)
                    }}
                />
            }
            title="부서별 근무조회"
            headerChildren={
                <>
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
                </>
            }
        >
            <WeeklyCalendar>{<div />}</WeeklyCalendar>
        </BasicContainer>
    )
}

export default WeekSelectorContainer
