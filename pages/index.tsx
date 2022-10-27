import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import SignInContainer from "../src/components/Pages/Auth/SignIn/SignInContainer"
import { checkDevice, isDarkMode } from "../src/utils/DeviceUtils"
import { rcDeviceAtom, rcThemeAtom } from "../src/recoil/Common"
import { useRecoilState } from "recoil"

export default function index(props: any) {
    const router = useRouter()
    const [deviceAtom, setDeviceAtom] = useRecoilState(rcDeviceAtom)
    const [themeAtom, setThemeAtom] = useRecoilState(rcThemeAtom)

    useEffect(() => {
        setThemeAtom({ ...themeAtom, theme: isDarkMode() })
        if (localStorage.getItem("user")) {
            router.push("/home")
        }
    }, [])

    return (
        <>
            <SignInContainer />
        </>
    )
}
