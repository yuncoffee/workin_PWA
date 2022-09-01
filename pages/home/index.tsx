import { useEffect, useState } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import {
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

function index() {
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const setWorkStatusAtom = useSetRecoilState(rcWorkStatusAtom)
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
        if (todayDateAtom && localStorage.getItem("workrecord")) {
            const _key = todayDateAtom.format("YYYY-MM-DD")
            if (
                JSON.parse(localStorage.getItem("workrecord")!)[_key] &&
                JSON.parse(localStorage.getItem("workrecord")!)[_key].workstatus
            ) {
                setWorkStatusAtom(
                    JSON.parse(localStorage.getItem("workrecord")!)[_key]
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
            {!render && <CheckContainer />}
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
