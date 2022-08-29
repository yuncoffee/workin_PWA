import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { rcDeviceAtom, rcThemeAtom } from "../../../../recoil/Common"
import { isDarkMode } from "../../../../utils/DeviceUtils"
import Button from "../../../Core/Button/Button"
import IconButton from "../../../Core/Button/IconButton"
import LinkButton from "../../../Core/Button/LinkButton"
import Toggle from "../../../Core/Toggle/Toggle"
import SettingListItem from "./SettingListItem"
import styles from "./_AppSettings.module.scss"

function SettingList() {
    const SETTING_LINK_LIST = [
        { name: "Notice", href: "/settings/notice" },
        { name: "Account Info", href: "/settings/account" },
    ]
    const VERSION_NUM = "0.0.1"
    const [themeAtom, setThemeAtom] = useRecoilState(rcThemeAtom)

    const [isThemeDark, setIsThemeDark] = useState<boolean>(
        themeAtom.theme === "dark",
    )

    useEffect(() => {
        if (themeAtom.theme === "light") {
            setIsThemeDark(isDarkMode())
        }
    }, [])

    useEffect(() => {
        if (isThemeDark) {
            setThemeAtom({ ...themeAtom, theme: "dark" })
        } else {
            setThemeAtom({ ...themeAtom, theme: "light" })
        }
    }, [isThemeDark])

    const handleCoachMarkButton = () => {
        console.log("!")
    }

    return (
        <article className={styles.settingList}>
            <SettingListItem name="Theme">
                <Toggle
                    toggleState={isThemeDark}
                    setToggleState={setIsThemeDark}
                />
            </SettingListItem>
            <SettingListItem name="Coach Mark">
                <IconButton
                    iconName="ri-arrow-right-s-line"
                    variant="transparent"
                    onClick={handleCoachMarkButton}
                />
            </SettingListItem>
            {SETTING_LINK_LIST.map((item, index) => {
                return (
                    <SettingListItem key={index} name={item.name}>
                        <LinkButton
                            buttonType="icon"
                            iconName="ri-arrow-right-s-line"
                            variant="transparent"
                            href={item.href}
                        />
                    </SettingListItem>
                )
            })}
            <SettingListItem name="Version">
                <h5>{VERSION_NUM}</h5>
            </SettingListItem>
        </article>
    )
}

export default SettingList
