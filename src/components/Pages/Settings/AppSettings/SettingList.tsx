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
        { name: "공지사항", href: "/settings/notice" },
        { name: "계정정보", href: "/settings/account" },
    ]
    const VERSION_NUM = "0.0.1"
    const [themeAtom, setThemeAtom] = useRecoilState(rcThemeAtom)

    const [isThemeDark, setIsThemeDark] = useState<boolean>()

    useEffect(() => {
        setIsThemeDark(localStorage.getItem("darkmode") === "dark")
    }, [])

    useEffect(() => {
        if (isThemeDark) {
            localStorage.setItem("darkmode", "dark")
            setThemeAtom({ ...themeAtom, theme: isDarkMode() })
        } else {
            localStorage.setItem("darkmode", "light")
            setThemeAtom({ ...themeAtom, theme: isDarkMode() })
        }
    }, [isThemeDark])

    const setLocalMode = () => {
        localStorage.setItem("darkmode", themeAtom.theme)
    }

    const handleCoachMarkButton = () => {
        console.log("!")
    }

    return (
        <article className={styles.settingList}>
            <SettingListItem name={`다크모드 : ${isThemeDark ? "켬" : "끔"}`}>
                <Toggle
                    toggleState={isThemeDark}
                    setToggleState={setIsThemeDark}
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
            <SettingListItem name="버전정보">
                <h5>{VERSION_NUM}</h5>
            </SettingListItem>
        </article>
    )
}

export default SettingList
