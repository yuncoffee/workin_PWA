import { useEffect, useState } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import {
    rcCurrentDateAtom,
    rcIsModalActiveAtom,
    rcToDayDateAtom,
    rcWorkStatusAtom,
} from "../../src/recoil/Common"
import NaverMap from "../../src/components/Map/NaverMap"
import RecordTimeModal from "../../src/components/Modal/RecordTimeModal/RecordTimeModal"
import CheckContainer from "../../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"
import ChangeWorkPlanModal from "../../src/components/Modal/ChangeWorkPlanModal/ChangeWorkPlanModal"
import AddWorkTimeModal from "../../src/components/Modal/AddWorkTimeModal/AddWorkTimeModal"
import dayjs from "dayjs"

function index() {
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)
    const setCurrentDateAtom = useSetRecoilState(rcCurrentDateAtom)
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const setWorkStatusAtom = useSetRecoilState(rcWorkStatusAtom)
    const [render, setRender] = useState(true)

    useEffect(() => {
        setCurrentDateAtom(dayjs())
        return () => {
            closeModal()
        }
    }, [])

    useEffect(() => {
        if (render) {
            setTimeout(() => {
                setRender(false)
            }, 300)
        }
        if (todayDateAtom && localStorage.getItem("workdata")) {
            const _key = todayDateAtom.format("YYYY-MM-DD")
            if (
                JSON.parse(localStorage.getItem("workdata")!)[_key] &&
                JSON.parse(localStorage.getItem("workdata")!)[_key].workstatus
            ) {
                setWorkStatusAtom(
                    JSON.parse(localStorage.getItem("workdata")!)[_key]
                        .workstatus,
                )
            } else {
                setWorkStatusAtom(0)
            }
        }
    }, [render])

    return (
        <>
            <NoticeContainer />
            <NaverMap />
            {!render && <CheckContainer render={render} />}
            <WorkDetailContainer />
            {isModalActive.recordTimeModal && (
                <RecordTimeModal setRender={setRender} />
            )}
            {isModalActive.addWorkTimeModal && <AddWorkTimeModal />}
            {isModalActive.changeWorkPlanModal && <ChangeWorkPlanModal />}
        </>
    )
}

export default index
