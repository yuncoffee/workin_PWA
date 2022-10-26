import { cloneElement, ReactElement, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import dayjs from "dayjs"
import Head from "next/head"
import { useRouter } from "next/router"
import weekOfYear from "dayjs/plugin/weekOfYear"
import duration from "dayjs/plugin/duration"
import {
    rcCurrentLocationAtom,
    rcCustomInfoAtom,
    rcCustomLightColor,
    rcDeviceAtom,
    rcIsModalActiveAtom,
    rcPrimaryColorAtom,
    rcThemeAtom,
} from "../recoil/Common"
import {
    checkDevice,
    checkUseGeolocation,
    isDarkMode,
} from "../utils/DeviceUtils"
import { useModalActive } from "../utils/ModalUtils"
import GlobalHeader from "./Header/GlobalHeader"
import GlobalNav from "./Nav/GlobalNav"
import { Layout } from "../models/Components/Layout/layout"

function Layout({ children }: Layout) {
    dayjs.extend(weekOfYear) // dayjs plugin 추가
    dayjs.extend(duration) // dayjs plugin 추가

    const router = useRouter()
    const { handleCloseModal } = useModalActive()

    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const [customLightColor, setCustomLightColor] =
        useRecoilState(rcCustomLightColor)
    const [primaryColor, setPrimaryColor] = useRecoilState(rcPrimaryColorAtom)
    const [deviceAtom, setDeviceAtom] = useRecoilState(rcDeviceAtom)
    const [themeAtom, setThemeAtom] = useRecoilState(rcThemeAtom)
    const [currentLocation, setCurrentLocation] = useRecoilState(
        rcCurrentLocationAtom,
    )
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const [viewOnly, setViewOnly] = useState(false)

    useEffect(() => {
        const _initColor = localStorage.getItem("customcolor")

        setDeviceAtom({ ...deviceAtom, device: checkDevice() })
        setThemeAtom({ ...themeAtom, theme: isDarkMode() })
        checkUseGeolocation(currentLocation, setCurrentLocation)

        if (typeof _initColor === "string") {
            setCustomLightColor(_initColor!)
        }
        if (localStorage.getItem("userinfo")) {
            const _data = JSON.parse(localStorage.getItem("userinfo")!)
            console.log(_data)
            const _newInfo = {
                ...customInfo,
                org: _data.org,
                name: _data.name,
                part: _data.part,
                role: _data.role,
                email: _data.email,
                color: _data.color,
                updateat: _data.updateat,
            }
            setCustomInfo(_newInfo)
        }
        // return () => {
        //     closeModal()
        // }
    }, [])

    useEffect(() => {
        const exceptPath = ["/", "/signup", "/appsettings"]
        if (router.pathname === "/home") {
            checkUseGeolocation(currentLocation, setCurrentLocation)
        }
        if (exceptPath.includes(router.pathname)) {
            setViewOnly(true)
        } else {
            setViewOnly(false)
        }
    }, [router])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeAtom.theme)
    }, [themeAtom])

    useEffect(() => {
        if (customLightColor) {
            const root = document.documentElement
            const rootDark = document.querySelector(
                `[data-theme="dark"]`,
            ) as HTMLElement
            const rootStyle = getComputedStyle(root)
            const darkHue = (
                parseInt(customLightColor.split(",")[2].split("%")[0]) - 10
            )
                .toString()
                .concat("%")

            const darkColor = customLightColor.split(", ")
            darkColor[2] = darkHue
            const darkColorResult = darkColor.join(",")

            root.style.setProperty("--sy-pri-normal", `${customLightColor}`)
            root.style.setProperty("--sy-pri-dark", `${darkColorResult}`)
            rootDark?.style.setProperty("--sy-pri-normal", `${darkColorResult}`)
            rootDark?.style.setProperty("--sy-pri-dark", `${darkColorResult}`)
            const hslPrimaryColor =
                rootStyle.getPropertyValue("--sy-pri-normal")
            setPrimaryColor(hslPrimaryColor)
        }
    }, [customLightColor])

    return (
        <>
            <Head>
                <meta
                    name="theme-color"
                    content={`hsla(${customLightColor}, 1)`}
                />
            </Head>
            {!viewOnly && <GlobalHeader />}
            <main
                className="main"
                data-device={deviceAtom.device}
                data-page={router.pathname}
                data-current={isModalActive.isModalOpen}
                data-viewonly={viewOnly}
            >
                {cloneElement(children, { setCustomLightColor })}
            </main>
            <div
                id="modal-root"
                onClick={() => {
                    handleCloseModal()
                }}
                data-current={isModalActive.isModalOpen}
            />
            {!viewOnly && <GlobalNav />}
        </>
    )
}

export default Layout
