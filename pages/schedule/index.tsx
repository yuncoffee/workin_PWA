import MonthlyWorkResultContainer from "../../src/components/Pages/Schedule/MonthlyWorkResult/MonthlyWorkResultContainer"
import WeeklyPlanContainer from "../../src/components/Pages/Schedule/WeeklyPlan/WeeklyPlanContainer"

// import styles from "../../src/components/Pages/Home/_home.module.scss"

function index() {
    return (
        <>
            <WeeklyPlanContainer />
            <MonthlyWorkResultContainer />
        </>
    )
}

export default index
