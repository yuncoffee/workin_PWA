import React, { useEffect, useState } from "react"
import { iWorkList } from "../../../../../models/Components/Pages/Scheduler"
import IconButton from "../../../../Core/Button/IconButton"
import Tag from "../../../../Core/Notice/Tag"
import styles from "./_WorkList.module.scss"

function WorkList({ workResult }: iWorkList) {
    const [date, setDate] = useState("loading...")

    useEffect(() => {
        setDate(setResultToDate(workResult))
    }, [workResult])

    const setResultToDate = (workResult: any) => {
        const _day = workResult.date.split(",")[0]
        const _date = workResult.date.split(",")[1].split(" ")[2]
        const _result = _date.concat(" ", _day)
        return _result
    }

    return (
        <article className={styles.workListItem}>
            <h4>{date}</h4>
            <section className={styles.workListItem__contents}>
                <div s-box="h-box" s-gap="4px">
                    {workResult.record.map((item, index) => {
                        return (
                            <Tag
                                className={styles.status}
                                dataType={item.status}
                                key={index}
                                variant="block"
                            >
                                <>
                                    <span>{item.status}</span>
                                    <h6>{item.time}</h6>
                                </>
                            </Tag>
                        )
                    })}
                </div>
                <IconButton
                    variant="text"
                    iconName="ri-arrow-right-s-line"
                    onClick={() => {}}
                />
            </section>
        </article>
    )
}

export default WorkList
