import React from "react"
import BasicContainer from "../../../Container/BasicContainer"
import SettingList from "./SettingList"
import styles from "./_AppSettings.module.scss"

function AppSettingsContainer() {
    return (
        <BasicContainer title="앱 설정">
            <SettingList />
        </BasicContainer>
    )
}

export default AppSettingsContainer
