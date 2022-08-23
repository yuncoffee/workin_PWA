import React from "react"
import MonthSelector from "./MonthSelector"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthlyWorkResultContainer() {
    return (
        <article className={styles.monthlyWorkResultContainer}>
            <section>
                <h3>Monthly Work Result</h3>
            </section>
            <MonthSelector />
            MonthlyWorkResultContainer
        </article>
    )
}

export default MonthlyWorkResultContainer
