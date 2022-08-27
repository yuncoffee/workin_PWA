import React from "react"
import WorkList from "./WorkList"
import { workDataList } from "./workDataMock"
import styles from "./_WorkList.module.scss"

function WorkListContainer() {
    return (
        <article className={styles.workListContainer}>
            {workDataList.map((workData, index) => {
                return <WorkList workResult={workData} key={index} />
            })}
        </article>
    )
}

export default WorkListContainer
