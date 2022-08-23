import NaverMap from "../../src/components/Map/NaverMap"
import CheckContainer from "../../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"

function index() {
    return (
        <>
            <NoticeContainer />
            <div s-divider="line" />
            <NaverMap />
            <CheckContainer />
            <WorkDetailContainer />
        </>
    )
}

export default index
