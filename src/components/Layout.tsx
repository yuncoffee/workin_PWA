import { cloneElement, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
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
    getCustomInfo,
    getPrimaryColor,
    isDarkMode,
} from "../utils/DeviceUtils"
import { useModalActive } from "../utils/ModalUtils"
import { Layout } from "../models/Components/Layout/layout"
import GlobalHeader from "./Header/GlobalHeader"
import GlobalNav from "./Nav/GlobalNav"

function Layout({ children }: Layout) {
    dayjs.extend(weekOfYear) // dayjs plugin 추가
    dayjs.extend(duration) // dayjs plugin 추가
    const router = useRouter()
    const { handleCloseModal } = useModalActive()
    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const [customLightColor, setCustomLightColor] =
        useRecoilState(rcCustomLightColor)
    const [deviceAtom, setDeviceAtom] = useRecoilState(rcDeviceAtom)
    const [themeAtom, setThemeAtom] = useRecoilState(rcThemeAtom)
    const [currentLocation, setCurrentLocation] = useRecoilState(
        rcCurrentLocationAtom,
    )
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const setPrimaryColor = useSetRecoilState(rcPrimaryColorAtom)
    const [viewOnly, setViewOnly] = useState(false)

    useEffect(() => {
        const _initColor = localStorage.getItem("customcolor")
        const _userInfo = localStorage.getItem("userinfo")

        setDeviceAtom({ ...deviceAtom, device: checkDevice() })
        setThemeAtom({ ...themeAtom, theme: isDarkMode() })
        checkUseGeolocation(currentLocation, setCurrentLocation)

        _initColor && setCustomLightColor(_initColor)
        _userInfo && setCustomInfo(getCustomInfo(customInfo, _userInfo))
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
        customLightColor && setPrimaryColor(getPrimaryColor(customLightColor))
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
