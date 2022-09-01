import React from "react"
import { iWeeklyTimeContainer } from "../../../../models/Components/Pages/Scheduler"
import { INIT_PLAN_MOCK } from "../../../../utils/WorkUtils"
import styles from "./_WeeklyPlan.module.scss"

function WeeklyTimeContainer({ weekData }: iWeeklyTimeContainer) {
    return (
        <article className={styles.planOfTheWeekContainer}>
            {weekData
                ? weekData.map((item, index) => {
                      return (
                          <h6 key={index}>
                              {item && item.length > 1 ? (
                                  <>
                                      <span>{item[0]}</span>
                                      <span>{item[1]}</span>
                                  </>
                              ) : (
                                  <span>{item && item[0]}</span>
                              )}
                          </h6>
                      )
                  })
                : INIT_PLAN_MOCK.map((item, index) => {
                      return (
                          <h6 key={index}>
                              {item.length > 1 ? (
                                  <>
                                      <span>{item[0]}</span>
                                      <span>{item[1]}</span>
                                  </>
                              ) : (
                                  <span>{item[0]}</span>
                              )}
                          </h6>
                      )
                  })}
        </article>
    )
}

export default WeeklyTimeContainer
