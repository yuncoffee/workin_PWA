import { useEffect, useState } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { reqCurrentAddress } from "../../src/api/NaverMap"
import PlanWorkModal from "../../src/components/Modal/PlanWorkModal/PlanWorkModal"
import MonthlyWorkResultContainer from "../../src/components/Pages/Schedule/MonthlyWorkResult/MonthlyWorkResultContainer"
import WeeklyPlanContainer from "../../src/components/Pages/Schedule/WeeklyPlan/WeeklyPlanContainer"
import { rcIsModalActiveAtom } from "../../src/recoil/Common"

function index() {
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)
    const [render, setRender] = useState(false)
    useEffect(() => {
        return () => {
            closeModal()
        }
    }, [])

    useEffect(() => {
        if (render) {
            setTimeout(() => {
                setRender(false)
            }, 100)
        }
    }, [render])

    return (
        <>
            {!render && <WeeklyPlanContainer />}
            <MonthlyWorkResultContainer />
            {isModalActive.planWorkModal && (
                <PlanWorkModal setRender={setRender} />
            )}
        </>
    )
}

export default index
