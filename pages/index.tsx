import { useRecoilValue } from "recoil"
import { rcDeviceAtom } from "../src/recoil/Common"
import LinkButton from "../src/components/Core/Button/LinkButton"
import styles from "../src/components/Pages/Home/_home.module.scss"
import InputText from "../src/components/Core/Input/InputText"
import Button from "../src/components/Core/Button/Button"
import { useEffect, useRef } from "react"

export default function Home(props: any) {
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    useEffect(() => {
        console.log(props.setCustomLightColor)
    }, [])

    const colorInputRef = useRef<HTMLInputElement>(null)
    const handleCustomColor = () => {
        const _value = colorInputRef!.current!.value
        console.log(_value)
        props.setCustomLightColor(_value)
    }

    return (
        <>
            <LinkButton
                buttonType="button"
                href="/home"
                buttonName="to Home!"
            />
            <div>
                <InputText placeholder="200, 100%, 50%" ref={colorInputRef} />
                <Button
                    buttonName="글로벌 색 변경"
                    onClick={handleCustomColor}
                />
            </div>
        </>
    )
}
