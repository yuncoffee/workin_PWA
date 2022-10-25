import React, { useEffect, useState } from "react"
import WorkList from "./WorkList"
import styles from "./_WorkList.module.scss"

function WorkListContainer({ workResultObj }: any) {
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        // TODO: coffee 타입 수정할 것!
        if (workResultObj) {
            const _filterdList = workResultObj
                .map((list: any[]) => list)
                .sort((a: any[], b: any[]) => {
                    return b[0].split("-")[2] - a[0].split("-")[2]
                })

            setFilteredList(_filterdList)
        }
    }, [workResultObj])

    return (
        <article className={styles.workListContainer}>
            {filteredList &&
                filteredList.map((workData: any, index: number) => {
                    return <WorkList workResult={workData} key={index} />
                })}
        </article>
    )
}

export default WorkListContainer
