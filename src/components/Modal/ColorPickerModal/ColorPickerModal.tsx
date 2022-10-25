import { useCallback, useEffect, useState } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { useResetRecoilState, useSetRecoilState } from "recoil"
import { rcCustomLightColor, rcIsModalActiveAtom } from "../../../recoil/Common"
import hexToHsl from "hex-to-hsl"
import Button from "../../Core/Button/Button"
import ModalContainer from "../ModalContainer"
import styles from "./_ColorPickerModal.module.scss"

function ColorPickerModal() {
    const setCustomLightColor = useSetRecoilState(rcCustomLightColor)
    const clseModal = useResetRecoilState(rcIsModalActiveAtom)
    const [color, setColor] = useState<ColorResult | null>(null)

    const handleSelectDateButton = () => {
        handleCustomColor(1)
        clseModal()
    }

    const handleCustomColor = (type?: number) => {
        if (color) {
            const _value = hexToHsl(color?.hex) as number[]
            console.log(_value)
            const _color = _value.map((color, index) => {
                let colorToString = color.toString()
                if (index > 0) {
                    colorToString = colorToString + `%`
                }
                return colorToString
            })

            const [h, s, l] = _color

            setCustomLightColor(`${h}, ${s}, ${l}`)
            if (type === 1) {
                localStorage.setItem("customcolor", `${h}, ${s}, ${l}`)
            }
        }
    }

    const handleColorChange = useCallback(
        (_color: ColorResult) => {
            setColor(_color)

            color && handleCustomColor()
        },
        [color],
    )

    return (
        <ModalContainer className={styles.colorPickerModal} name="색상 선택">
            <ChromePicker
                color={color?.hex}
                className={styles.colorPicker}
                onChange={(color) => {
                    handleColorChange(color)
                }}
            />
            <Button
                buttonName="선택완료"
                size="lg"
                length="100%"
                onClick={handleSelectDateButton}
            />
        </ModalContainer>
    )
}

export default ColorPickerModal
