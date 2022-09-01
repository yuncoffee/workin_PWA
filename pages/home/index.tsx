import { useEffect, useState } from "react"
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
            <NoticeContainer />
            <NaverMap />
            {!render && <CheckContainer />}
            <WorkDetailContainer />
            {isModalActive.recordTimeModal && (
                <RecordTimeModal setRender={setRender} />
            )}
        </>
    )
}

export default index
