import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import NaverMap from "../../src/components/Map/NaverMap"
import CheckContainer from "../../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"
import styles from "../../src/components/Pages/Home/_home.module.scss"
import { rcDeviceAtom } from "../../src/recoil/Common"

function index() {
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    return (
        <main className={styles.main} data-device={deviceAtom.device}>
            <NoticeContainer />
            <div s-divider="line" />
            <NaverMap />
            <CheckContainer />
            <WorkDetailContainer />
        </main>
    )
}

export default index
