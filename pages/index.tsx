import { useRecoilValue } from "recoil"
import { rcDeviceAtom } from "../src/recoil/Common"
import LinkButton from "../src/components/Core/Button/LinkButton"
import styles from "../src/components/Pages/Home/_home.module.scss"
import InputText from "../src/components/Core/Input/InputText"
import Button from "../src/components/Core/Button/Button"
import { useEffect, useRef } from "react"
import BasicContainer from "../src/components/Container/BasicContainer"
import CustomFormContainer from "../src/components/Container/CustomFormContainer"

export default function Home(props: any) {
    return <CustomFormContainer props={props} />
}
