import { useRecoilValue } from "recoil"
import MonthlyWorkResultContainer from "../../src/components/Pages/Schedule/MonthlyWorkResult/MonthlyWorkResultContainer"
import WeeklyPlanContainer from "../../src/components/Pages/Schedule/WeeklyPlan/WeeklyPlanContainer"

// import styles from "../../src/components/Pages/Home/_home.module.scss"
import { rcDeviceAtom } from "../../src/recoil/Common"

function index() {
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    return (
        <main className="main" data-device={deviceAtom.device}>
            <WeeklyPlanContainer />
            <MonthlyWorkResultContainer />
        </main>
    )
}

export default index
