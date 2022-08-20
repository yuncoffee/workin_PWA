import React, { ReactElement, useEffect } from "react"
import { useRecoilState } from "recoil"
import { rcCurrentLocationAtom, rcDeviceAtom } from "../recoil/Common"
import GlobalHeader from "./Header/GlobalHeader"
import GlobalNav from "./Nav/GlobalNav"

interface iLayout {
    children: ReactElement
}

function Layout({ children }: iLayout) {
    const [deviceAtom, setDeviceAtom] = useRecoilState(rcDeviceAtom)
    const [currentLocation, setCurrentLocation] = useRecoilState(
        rcCurrentLocationAtom,
    )

    useEffect(() => {
        checkDevice()
        checkUseGeolocation()
    }, [])

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
            <GlobalHeader />
            {children}
            <GlobalNav />
        </>
    )
}

export default Layout
