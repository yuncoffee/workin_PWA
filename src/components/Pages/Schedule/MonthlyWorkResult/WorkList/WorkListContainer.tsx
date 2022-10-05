import React, { useEffect, useState } from "react"
import WorkList from "./WorkList"
import { workDataList } from "./workDataMock"
import styles from "./_WorkList.module.scss"
import Link from "next/link"

function WorkListContainer({ workResultObj }: any) {
    return (
        <article className={styles.workListContainer}>
            {workResultObj &&
                workResultObj.map((workData: any, index: number) => {
                    return <WorkList workResult={workData} key={index} />
                })}
        </article>
    )
}

export default WorkListContainer
