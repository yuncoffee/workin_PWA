import React, { ReactElement, useEffect } from "react"
import { useRecoilState } from "recoil"
import { rcDeviceAtom } from "../recoil/Common"
import GlobalHeader from "./Header/GlobalHeader"
import GlobalNav from "./Nav/GlobalNav"

interface iLayout {
    children: ReactElement
}

function Layout({ children }: iLayout) {
    const [deviceAtom, setDeviceAtom] = useRecoilState(rcDeviceAtom)

    useEffect(() => {
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
    }, [])

    return (
        <>
            <GlobalHeader />
            {children}
            <GlobalNav />
        </>
    )
}

export default Layout
