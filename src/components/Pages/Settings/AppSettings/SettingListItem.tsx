import React from "react"
import { iSettingListItem } from "../../../../models/Components/Pages/Settings"
import styles from "./_AppSettings.module.scss"

function SettingListItem({ name, children }: iSettingListItem) {
    return (
        <div className={styles.settingListItem}>
            <h5 className={styles.settingListItem__title}>{name}</h5>
            <div className={styles.settingListItem__options}>{children}</div>
        </div>
    )
}

export default SettingListItem
