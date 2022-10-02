import React, { ReactNode, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { rcCurrentDateAtom, rcToDayDateAtom } from "../../../../recoil/Common"
import IconButton from "../../../Core/Button/IconButton"
import styles from "./_WeeklyPlan.module.scss"
import { WEEK_LIST } from "../../../../utils/DayjsUtils"
import WeeklyTimeContainer from "./WeeklyTimeContainer"
import { INIT_PLAN_MOCK } from "../../../../utils/WorkUtils"

interface iWeeklyCalendar {
    children?: ReactNode
}

function WeeklyCalendar({ children }: iWeeklyCalendar) {
    // dayjs.extend(objectSupport)
    const [currentDate, setCurrentDate] = useRecoilState(rcCurrentDateAtom)
    const todayDate = useRecoilValue(rcToDayDateAtom)
    const [currentWeek, setCurrentWeek] = useState(0)
    const [currentYear, setCurrentYear] = useState(0)
    const [week, setWeek] = useState(WEEK_LIST)
    const [currentWeekDate, setCurrentWeekDate] = useState<any[]>([])

    const [weekPlanData, setWeekPlanData] = useState(INIT_PLAN_MOCK)

    useEffect(() => {
        if (localStorage.getItem("plandata")) {
            setWeekPlanData(
                JSON.parse(localStorage.getItem("plandata")!)[currentWeek],
            )
        }
    }, [currentWeek])

    useEffect(() => {
        console.log(weekPlanData)
    }, [weekPlanData])

    useEffect(() => {
        console.log(currentDate.week())

        setCurrentWeek(currentDate.week())
        setCurrentYear(currentDate.year())

        const _currentWeek = week.map((date, index) => {
            const dateInfo = currentDate.day(index)
            const _date = dateInfo.date()
            const _day = week[index]

            date = { date: _date, day: _day } as any

            return date
        })
        setCurrentWeekDate(_currentWeek)
    }, [currentDate])

    const handleCurrentDate = (type: number) => {
        if (type === 0) {
            const _lastWeek = currentDate.subtract(1, "week")
            setCurrentDate(_lastWeek)
        }
        if (type === 1) {
            const _nextWeek = currentDate.add(1, "week")
            setCurrentDate(_nextWeek)
        }
    }

    return (
        <article className={styles.weeklyCalendar}>
            <section
                className={styles.btnContainer}
                s-box="h-box"
                s-align="center"
            >
                <IconButton
                    iconName="ri-arrow-left-s-line"
                    onClick={() => {
                        handleCurrentDate(0)
                    }}
                    variant="transparent-line"
                />
                <h4>
                    <span>{currentYear}년</span>
                    <span>{currentDate.day(4).format("MM")}월</span>
                    {currentWeek}주차
                </h4>
                <IconButton
                    iconName="ri-arrow-right-s-line"
                    onClick={() => {
                        handleCurrentDate(1)
                    }}
                    variant="transparent-line"
                />
            </section>
            <section className={styles.weeklyInfoContainer}>
                <section className={styles.dayOfTheWeekContainer}>
                    {currentWeekDate.map((item, index) => {
                        return <h5 key={index}>{item.day}</h5>
                    })}
                </section>
                <section className={styles.dateOfTheWeekContainer}>
                    {currentWeekDate.map((item, index) => {
                        return (
                            <h6
                                key={index}
                                data-today={
                                    currentDate.day(4).format("MM") ===
                                        todayDate.day(4).format("MM") &&
                                    parseInt(todayDate.format("DD")) ===
                                        item.date
                                }
                            >
                                {item.date}
                            </h6>
                        )
                    })}
                </section>
                {children ? (
                    children
                ) : (
                    <WeeklyTimeContainer weekData={weekPlanData} />
                )}
            </section>
        </article>
    )
}

export default WeeklyCalendar
