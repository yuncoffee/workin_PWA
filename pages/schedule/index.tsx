import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import PlanWorkModal from "../../src/components/Modal/PlanWorkModal/PlanWorkModal"
import MonthlyWorkResultContainer from "../../src/components/Pages/Schedule/MonthlyWorkResult/MonthlyWorkResultContainer"
import WeeklyPlanContainer from "../../src/components/Pages/Schedule/WeeklyPlan/WeeklyPlanContainer"
import { rcIsModalActiveAtom } from "../../src/recoil/Common"

function index() {
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)

    useEffect(() => {
        return () => {
            closeModal()
        }
    }, [])

    return (
        <>
            <WeeklyPlanContainer />
            <MonthlyWorkResultContainer />
            {isModalActive.planWorkModal && <PlanWorkModal />}
        </>
    )
}

export default index
