import { DefaultValue, useRecoilValue } from "recoil"
import { rcDeviceAtom } from "../src/recoil/Common"
import LinkButton from "../src/components/Core/Button/LinkButton"
import styles from "../src/components/Pages/Home/_home.module.scss"
import InputText from "../src/components/Core/Input/InputText"
import Button from "../src/components/Core/Button/Button"
import { useEffect, useRef, useState } from "react"
import BasicContainer from "../src/components/Container/BasicContainer"
import CustomFormContainer from "../src/components/Container/CustomFormContainer"
import { useRouter } from "next/router"

import { auth, db, getWork } from "../src/utils/Firebase/firebase"
import SignInContainer from "../src/components/Pages/Auth/SignIn/SignInContainer"
import { onAuthStateChanged } from "firebase/auth"

export default function Home(props: any) {
    const router = useRouter()
    // 로컬 스토리지에 uid가 있는지 여부 체크 ,uid는 로그아웃 전 까지 localstorage에 보관
    const [isHasLocalData, setIsHasLocalData] = useState(false)
    const [defaultValue, setDefaultValue] = useState({})

    useEffect(() => {
        if (localStorage.getItem("user")) {
            router.push("/home")
        }
    }, [])

    return (
        <>
            {/* isHasLocalData && (
            <CustomFormContainer props={props} defaultValue={defaultValue} />
            ) */}
            <SignInContainer />
        </>
    )
}
