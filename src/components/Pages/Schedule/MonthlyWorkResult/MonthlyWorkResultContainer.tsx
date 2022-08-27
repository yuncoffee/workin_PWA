import React from "react"
import MonthSelector from "./MonthSelector"

import WorkListContainer from "./WorkList/WorkListContainer"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthlyWorkResultContainer() {
    return (
        <article className={styles.monthlyWorkResultContainer}>
            <section>
                <h3>내 월간 근무내역</h3>
            </section>
            <MonthSelector />
            <WorkListContainer />
        </article>
    )
}

export default MonthlyWorkResultContainer
