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

export default function Home(props: any) {
    const router = useRouter()
    const [isHasLocalData, setIsHasLocalData] = useState(false)
    const [defaultValue, setDefaultValue] = useState({})

    useEffect(() => {
        checkLocalStorage()
        setIsHasLocalData(true)

        return () => {
            setIsHasLocalData(false)
        }
    }, [])

    const checkFisrtUse = () => {
        if (localStorage.getItem("isfirst")) {
            return false
        } else {
            return true
        }
    }

    const checkLocalStorage = () => {
        if (checkFisrtUse()) {
            localStorage.setItem("isfirst", JSON.stringify(false))
            return
        } else {
            if (localStorage.getItem("userinfo")) {
                const _info = JSON.parse(localStorage.getItem("userinfo")!)
                const _color = localStorage.getItem("customcolor")
                setDefaultValue({
                    companyName: _info.companyName,
                    myName: _info.myName,
                    myOrg: _info.myOrg,
                    myWork: _info.myWork,
                    myEmail: _info.myEmail,
                    color: _color,
                })
            } else {
                return
            }
        }
    }

    return (
        isHasLocalData && (
            <CustomFormContainer props={props} defaultValue={defaultValue} />
        )
    )
}
