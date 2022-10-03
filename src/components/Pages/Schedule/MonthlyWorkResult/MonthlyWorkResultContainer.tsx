import React, { useEffect, useState } from "react"
import BasicContainer from "../../../Container/BasicContainer"
import MonthSelector from "./MonthSelector"

import WorkListContainer from "./WorkList/WorkListContainer"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthlyWorkResultContainer() {
    const [workResultObj, setWorkResultObj] = useState<any>()
    const [filteredObj, setFilteredObj] = useState()

    useEffect(() => {
        if (localStorage.getItem("workrecord")) {
            setWorkResultObj(
                Object.entries(JSON.parse(localStorage.getItem("workrecord")!)),
            )
        }
    }, [])

    return (
        <BasicContainer
            className={styles.monthlyWorkResultContainer}
            title="내 월간 근무내역"
        >
            <>
                <MonthSelector
                    workResultObj={workResultObj}
                    setFilteredObj={setFilteredObj}
                    filteredObj={filteredObj}
                />

                <WorkListContainer workResultObj={filteredObj} />
            </>
        </BasicContainer>
    )
}

export default MonthlyWorkResultContainer
