import Head from "next/head"
import { useRouter } from "next/router"
import { cloneElement, ReactElement, useEffect } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import dayjs from "dayjs"
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
import { isDarkMode } from "../utils/DeviceUtils"
import { useModalActive } from "../utils/ModalUtils"
import GlobalHeader from "./Header/GlobalHeader"
import GlobalNav from "./Nav/GlobalNav"

interface iLayout {
    children: ReactElement
}

function Layout({ children }: iLayout) {
    dayjs.extend(weekOfYear)
    dayjs.extend(duration)
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
    const closeModal = useResetRecoilState(rcIsModalActiveAtom)
    useEffect(() => {
        checkDevice()
        checkUseGeolocation()

        if (isDarkMode()) {
            setThemeAtom({ ...themeAtom, theme: "dark" })
        } else {
            setThemeAtom({ ...themeAtom, theme: "light" })
        }
        if (localStorage.getItem("customcolor")) {
            const _initColor = localStorage.getItem("customcolor")
            setCustomLightColor(_initColor!)
        }
        if (localStorage.getItem("userinfo")) {
            const _data = JSON.parse(localStorage.getItem("userinfo")!)
            console.log(_data)
            const _newInfo = {
                ...customInfo,
                companyName: _data.companyName,
                myName: _data.myName,
                myOrg: _data.myOrg,
                myWork: _data.myWork,
                myEmail: _data.myEmail,
            }
            setCustomInfo(_newInfo)
        }
        // return () => {
        //     closeModal()
        // }
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeAtom.theme)
    }, [themeAtom])

    useEffect(() => {
        const root = document.documentElement
        const rootDark = document.querySelector(
            `[data-theme="dark"]`,
        ) as HTMLElement

        const rootStyle = getComputedStyle(root)
        console.log(rootStyle.getPropertyValue("--sy-pri-normal"))
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
        const hslPrimaryColor = rootStyle.getPropertyValue("--sy-pri-normal")
        setPrimaryColor(hslPrimaryColor)
    }, [customLightColor])

    const checkDevice = () => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.indexOf("android") > -1) {
            //안드로이드
            setDeviceAtom({ ...deviceAtom, device: "and" })
        } else if (
            userAgent.indexOf("iphone") > -1 ||
            userAgent.indexOf("ipad") > -1 ||
            userAgent.indexOf("ipod") > -1
        ) {
            //IOS
            setDeviceAtom({ ...deviceAtom, device: "ios" })
        } else {
            //아이폰, 안드로이드 외 모바일
            setDeviceAtom({ ...deviceAtom, device: "web" })
        }
    }

    const checkUseGeolocation = () => {
        if (navigator.geolocation) {
            console.log("yes!")
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)

                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                setCurrentLocation({
                    ...currentLocation,
                    coordinate: [latitude, longitude],
                })
            })
        } else {
            alert("위치정보 사용불가")
        }
    }

    return (
        <>
            <Head>
                <meta
                    name="theme-color"
                    content={`hsla(${customLightColor}, 1)`}
                />
            </Head>
            <GlobalHeader />
            <main
                className="main"
                data-device={deviceAtom.device}
                data-page={router.pathname}
                data-current={isModalActive.isModalOpen}
            >
                {cloneElement(children, { setCustomLightColor })}
                {/* {children} */}
            </main>
            <div
                id="modal-root"
                onClick={() => {
                    handleCloseModal()
                }}
                data-current={isModalActive.isModalOpen}
            />
            <GlobalNav />
        </>
    )
}

export default Layout
