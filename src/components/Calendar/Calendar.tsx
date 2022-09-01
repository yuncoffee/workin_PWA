import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import { WEEK_LIST } from "../../utils/DayjsUtils"
import { iCalendar } from "../../models/Components/Layout/layout"
import IconButton from "../Core/Button/IconButton"
import styles from "./_Calendar.module.scss"

function Calendar({ selectDate, setSelectDate }: iCalendar) {
    const today = dayjs()
    const [viewDate, setViewDate] = useState(dayjs())

    const createCalendar = () => {
        const startWeek = viewDate.startOf("month").week()
        const endWeek =
            viewDate.endOf("month").week() === 1
                ? 53
                : viewDate.endOf("month").week()
        let calender = []

        for (let week = startWeek; week <= endWeek; week++) {
            calender.push(
                <div className={styles.dayContainer__week} key={week}>
                    {Array(7)
                        .fill(0)
                        .map((n, i) => {
                            let current = viewDate
                                .startOf("week")
                                .week(week)
                                .add(n + i, "day")
                            if (viewDate.format("MM") === "12") {
                                current = viewDate
                                    .startOf("week")
                                    .week(week - 52)
                                    .add(n + i, "day")
                            }
                            console.log("current", current)
                            // 현재 날짜 (기준)
                            let isSelected =
                                selectDate.week() === current.week()
                                    ? true
                                    : false
                            let isToday =
                                today.format("YYYYMMDD") ===
                                current.format("YYYYMMDD")
                                    ? true
                                    : false
                            let isNone =
                                current.format("MM") === viewDate.format("MM")
                                    ? ""
                                    : "none"
                            return (
                                <div
                                    className={styles.dayContainer__day}
                                    data-click={isSelected}
                                    key={`${week}_${i}`}
                                    onClick={() => {
                                        setSelectDate(current)
                                    }}
                                >
                                    <h5 className={`day`}>
                                        {current.format("D")}
                                    </h5>
                                    {isToday ? (
                                        <span className={styles.today}>
                                            오늘
                                        </span>
                                    ) : isSelected ? (
                                        <span className="isSelected"></span>
                                    ) : null}
                                </div>
                            )
                        })}
                </div>,
            )
        }
        return calender
    }

    const changegeMonth = (date: any, changeString: string) => {
        switch (changeString) {
            case "add":
                return setViewDate(viewDate.add(1, "month"))
            case "subtract":
                return setViewDate(viewDate.subtract(1, "month"))
            default:
                return date
        }
    }

    const resetMonth = () => {
        setViewDate(dayjs())
    }

    return (
        <article className={styles.calendar}>
            <section className={styles.btnContainer}>
                <IconButton
                    iconName="ri-arrow-left-s-line"
                    onClick={() => {
                        changegeMonth(viewDate, "subtract")
                    }}
                    variant="transparent-line"
                />
                <div s-box="h-box" s-gap="8px">
                    <h4 className="thisMonth">{viewDate.format("MM")}월</h4>
                    <IconButton
                        iconName="ri-restart-line"
                        size="xs"
                        onClick={() => {
                            resetMonth()
                        }}
                        variant="transparent-line"
                    />
                </div>

                <IconButton
                    iconName="ri-arrow-right-s-line"
                    onClick={() => {
                        changegeMonth(viewDate, "add")
                    }}
                    variant="transparent-line"
                />
            </section>
            <section className={styles.dayOfTheWeekContainer}>
                {WEEK_LIST.map((item, index) => {
                    return <h5 key={index}>{item}</h5>
                })}
            </section>
            <section className={styles.dayContainer}>
                {createCalendar()}
            </section>
        </article>
    )
}

export default Calendar
