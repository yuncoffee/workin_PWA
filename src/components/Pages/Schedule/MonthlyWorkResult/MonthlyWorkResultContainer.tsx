import React from "react"
import BasicContainer from "../../../Container/BasicContainer"
import MonthSelector from "./MonthSelector"

import WorkListContainer from "./WorkList/WorkListContainer"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthlyWorkResultContainer() {
    return (
        <BasicContainer
            className={styles.monthlyWorkResultContainer}
            title="내 월간 근무내역"
        >
            <>
                <MonthSelector />
                <WorkListContainer />
            </>
        </BasicContainer>
    )
}

export default MonthlyWorkResultContainer
