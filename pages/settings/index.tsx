import React, { useEffect } from "react"
import { useRecoilState } from "recoil"
import AppSettingsContainer from "../../src/components/Pages/Settings/AppSettings/AppSettingsContainer"
import DeleteAccount from "../../src/components/Pages/Settings/DeleteAccount/DeleteAccount"
import MyInfoContainer from "../../src/components/Pages/Settings/MyInfo/MyInfoContainer"
import styles from "../../src/components/Pages/Settings/_Settings.module.scss"
import { rcCustomInfoAtom, rcPrevFromData } from "../../src/recoil/Common"

function index() {
    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const [prevFormData, setPrevFormData] = useRecoilState(rcPrevFromData)
    useEffect(() => {
        const _userinfo = localStorage.getItem("userinfo")
        console.log(_userinfo)
        if (_userinfo) {
            const { name, org, part, role, color } = JSON.parse(_userinfo)
            setPrevFormData({ name, org, part, role, color })
        }
    }, [])

    return (
        <>
            <MyInfoContainer />
            <AppSettingsContainer />
            <DeleteAccount />
        </>
    )
}

export default index
