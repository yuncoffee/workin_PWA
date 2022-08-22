import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import duration from "dayjs/plugin/duration"
import objectSupport from "dayjs/plugin/objectSupport"
import IconButton from "../../../Core/Button/IconButton"
import styles from "./_WeeklyPlan.module.scss"

function WeeklyCalendar() {
    dayjs.extend(weekOfYear)
    dayjs.extend(duration)
    // dayjs.extend(objectSupport)
    const [currentDay, setCurrentDay] = useState(dayjs())
    const [currentWeek, setCurrentWeek] = useState(0)
    const [currentMonth, setCurrentMonth] = useState(0)
    const [currentYear, setCurrentYear] = useState(0)
    const [week, setWeek] = useState([
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ])
    const [currentWeekDate, setCurrentWeekDate] = useState<any[]>([])

    useEffect(() => {}, [])

    useEffect(() => {
        console.log("주차", currentDay.week())
        setCurrentWeek(currentDay.week())
        setCurrentYear(currentDay.year())
        console.log(currentDay)
        // console.log(currentDay.week(3))

        const _currentWeek = week.map((date, index) => {
            const dateInfo = currentDay.day(index)

            const _date = dateInfo.date()
            const _day = week[index]

            date = { date: _date, day: _day } as any

            return date

            // setCurrentWeekDate(dayjs().day(index))
        })
        setCurrentWeekDate(_currentWeek)
        // console.log("what", dayjs().day())
    }, [currentDay])

    const handleCurrentDate = (type: number) => {
        if (type === 0) {
            const _lastWeek = currentDay.subtract(1, "week")
            setCurrentDay(_lastWeek)
        }
        if (type === 1) {
            const _nextWeek = currentDay.add(1, "week")
            setCurrentDay(_nextWeek)
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
                    <span>{currentDay.format("MM")}월</span>
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
                        return <h6 key={index}>{item.date}</h6>
                    })}
                </section>
                <section className={styles.planOfTheWeekContainer}>
                    {currentWeekDate.map((item, index) => {
                        return (
                            <h6 key={index}>
                                <span>{item.date}</span>
                                <span>{item.date}</span>
                            </h6>
                        )
                    })}
                </section>
            </section>
        </article>
    )
}

export default WeeklyCalendar
