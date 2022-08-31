import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import NaverMap from "../../src/components/Map/NaverMap"
import RecordTimeModal from "../../src/components/Modal/RecordTimeModal/RecordTimeModal"
import CheckContainer from "../../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"
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
            <NoticeContainer />
            <NaverMap />
            <CheckContainer />
            <WorkDetailContainer />
            {isModalActive.recordTimeModal && <RecordTimeModal />}
        </>
    )
}

export default index
