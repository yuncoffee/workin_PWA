import { useRouter } from "next/router"
import { useRecoilValue } from "recoil"
import NaverMap from "../../src/components/Map/NaverMap"
import CheckContainer from "../../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"
import { rcDeviceAtom } from "../../src/recoil/Common"

function index() {
    const deviceAtom = useRecoilValue(rcDeviceAtom)
    const router = useRouter()

    return (
        <main
            className="main"
            data-device={deviceAtom.device}
            data-page={router.pathname}
        >
            <NoticeContainer />
            <div s-divider="line" />
            <NaverMap />
            <CheckContainer />
            <WorkDetailContainer />
        </main>
    )
}

export default index
