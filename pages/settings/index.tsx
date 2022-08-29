import React from "react"
import AppSettingsContainer from "../../src/components/Pages/Settings/AppSettings/AppSettingsContainer"
import DeleteAccount from "../../src/components/Pages/Settings/DeleteAccount/DeleteAccount"
import MyInfoContainer from "../../src/components/Pages/Settings/MyInfo/MyInfoContainer"
import styles from "../../src/components/Pages/Settings/_Settings.module.scss"

function index() {
    return (
        <>
            <MyInfoContainer />
            <AppSettingsContainer />
            <DeleteAccount />
        </>
    )
}

export default index
