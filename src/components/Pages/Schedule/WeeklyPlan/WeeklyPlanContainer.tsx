import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import { useModalActive } from "../../../../utils/ModalUtils"
import BasicContainer from "../../../Container/BasicContainer"
import Button from "../../../Core/Button/Button"
import IconButton from "../../../Core/Button/IconButton"
import WeeklyCalendar from "./WeeklyCalendar"
import styles from "./_WeeklyPlan.module.scss"
function WeeklyPlanContainer() {
    const { handleModalActive } = useModalActive()
    const resetCurrentDate = useResetRecoilState(rcCurrentDateAtom)
    const currentDate = useRecoilValue(rcCurrentDateAtom)
    const [buttonState, setButtonState] = useState(0)

    useEffect(() => {
        const todaysMonth = dayjs().format("M")

        console.log(todaysMonth)

        if (
            parseInt(currentDate.day(4).format("MM")) ===
            parseInt(dayjs().day(4).format("MM"))
        ) {
            console.log("같은 달!")
            if (
                parseInt(currentDate.day(4).format("DD")) ===
                parseInt(dayjs().day(4).format("DD"))
            ) {
                console.log("같은 날!")
                setButtonState(0)
            } else {
                console.log("다른 날!")
                if (
                    parseInt(currentDate.day(4).format("DD")) >
                    parseInt(dayjs().day(4).format("DD"))
                ) {
                    setButtonState(1)
                } else {
                    setButtonState(2)
                }
            }
        } else if (
            parseInt(currentDate.day(4).format("MM")) >
            parseInt(dayjs().day(4).format("MM"))
        ) {
            setButtonState(1)
            console.log("다음 달!")
        } else {
            console.log("지난 달!")
            setButtonState(2)
        }
    }, [currentDate])

    const handleMakePaln = (type: number) => {
        switch (type) {
            case 0:
                console.log("신규")
                handleModalActive("planWorkModal")
                break

            case 1:
                console.log("변경")
                handleModalActive("planWorkModal")
                break

            default:
                break
        }
    }

    return (
        <BasicContainer
            title="내 주간 근무계획"
            headerChildren={
                <IconButton
                    iconName="ri-refresh-line"
                    variant="transparent"
                    onClick={() => {
                        resetCurrentDate()
                    }}
                />
            }
        >
            <>
                <WeeklyCalendar />
                {buttonState === 0 ? (
                    <Button
                        buttonName="일정 변경하기"
                        onClick={() => {
                            handleMakePaln(1)
                        }}
                        size="mid"
                        variant="transparent-line"
                    />
                ) : buttonState === 1 ? (
                    <Button
                        buttonName="계획 작성하기"
                        onClick={() => {
                            handleMakePaln(0)
                        }}
                        size="mid"
                        variant="block"
                    />
                ) : (
                    <Button
                        buttonName="완료된 근무"
                        onClick={() => {}}
                        size="mid"
                        variant="block"
                        disabled
                    />
                )}
            </>
        </BasicContainer>
    )
}

export default WeeklyPlanContainer
