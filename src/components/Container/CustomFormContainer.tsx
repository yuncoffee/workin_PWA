import React, { useEffect, useMemo, useRef, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
    rcCustomInfoAtom,
    rcCustomLightColor,
    rcIsModalActiveAtom,
    rcPrevFromData,
} from "../../recoil/Common"
import Button from "../Core/Button/Button"
import LinkButton from "../Core/Button/LinkButton"
import InputText from "../Core/Input/InputText"
import BasicContainer from "./BasicContainer"
import { doc, updateDoc } from "firebase/firestore/lite"
import { db } from "../../utils/Firebase/firebase"
import ColorPickerModal from "../Modal/ColorPickerModal/ColorPickerModal"
import { useModalActive } from "../../utils/ModalUtils"
import { CustomInfo } from "../../models/Data/common"
import { USER_INFO_TEMPLATE } from "../../utils/UserUtils"

function CustomFormContainer() {
    const { handleModalActive } = useModalActive()
    const infoRef = useRef<null | HTMLInputElement[]>([])
    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const [prevFormData, setPrevFormData] = useRecoilState(rcPrevFromData)
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const setCustomLightColor = useSetRecoilState(rcCustomLightColor)
    const [changeableInfo, setChangeableInfo] = useState<CustomInfo | null>(
        null,
    )
    const [isFirst, setIsFirst] = useState(false)
    const [prevColor, setPrevColor] = useState("")
    const [_defaultValue, _setDefaultValue] = useState()

    useEffect(() => {
        if (isFirst) {
            setPrevColor("0, 0%, 0%")
        } else {
            const _customColor = localStorage.getItem("customcolor")
            console.log(_customColor)
            if (_customColor) {
                setPrevColor(_customColor)
            } else {
                localStorage.setItem("customcolor", prevColor)
                setPrevColor("0, 0%, 0%")
            }
        }
    }, [isFirst])

    useEffect(() => {
        if (customInfo) {
            localStorage.setItem("userinfo", JSON.stringify({ ...customInfo }))
        }

        const _changeableInfo: CustomInfo = { ...customInfo }
        const _isFirst = localStorage.getItem("isfirst")

        delete _changeableInfo.updateat
        delete _changeableInfo.email
        console.log(infoRef && infoRef.current && infoRef.current![0])
        setChangeableInfo(_changeableInfo)
        _isFirst && JSON.parse(_isFirst) && setIsFirst(true)
    }, [customInfo])

    useEffect(() => {
        console.log(prevFormData)
    }, [prevFormData])

    const handleSubmitInfo = async (type: number) => {
        const _myName = infoRef.current![0].value
        const _org = infoRef.current![1].value
        const _part = infoRef.current![2].value
        const _role = infoRef.current![3].value
        const _color = localStorage.getItem("customcolor")!
        const _updateAt = new Date()
        const _uid = JSON.parse(localStorage.getItem("user")!).uid
        const _email = JSON.parse(localStorage.getItem("user")!).email
        const userRef = doc(db, "users", _uid)
        localStorage.setItem("isfirst", "false")

        if (type === 0) {
            const _newInfo = {
                name: "테스트계정",
                org: "미설정",
                part: "미설정",
                role: "미설정",
                color: "0, 0%, 0%",
                email: _email,
                updateat: _updateAt,
            }
            await setCustomInfo(_newInfo)
            await updateDoc(userRef, _newInfo)
        }

        if (type === 1) {
            const _newInfo = {
                name: _myName,
                org: _org,
                part: _part,
                role: _role,
                color: _color,
                email: _email,
                updateat: _updateAt,
            }
            await setCustomInfo(_newInfo)
            await updateDoc(userRef, _newInfo)
        }
    }

    const handlePrevData = (key: string, value: string) => {
        const _newData = { ...prevFormData, [key]: value }
        // _newData = {_newData[key] : value}

        setPrevFormData(_newData)
        console.log(_newData)
    }

    return (
        <>
            <BasicContainer title="앱 사용을 위한 정보를 작성해주세요" />
            <BasicContainer title="회원 정보">
                <section s-box="v-box" s-gap="8px">
                    {USER_INFO_TEMPLATE.map((info, index) => {
                        const _tag: "name" | "org" | "part" | "role" =
                            info.tag as "name" | "org" | "part" | "role"
                        return (
                            <div s-box="v-box" s-gap="4px" key={index}>
                                <label htmlFor={info.id}>
                                    <h6>{info.label}</h6>
                                </label>
                                {prevFormData ? (
                                    <InputText
                                        id={info.id}
                                        size="lg"
                                        placeholder={info.placeholder}
                                        defaultValue={
                                            !isFirst && prevFormData
                                                ? prevFormData[_tag]
                                                : undefined
                                        }
                                        onChange={(event) => {
                                            const _target =
                                                event.target as HTMLInputElement
                                            handlePrevData(
                                                info.tag,
                                                _target.value,
                                            )
                                        }}
                                        ref={(el: HTMLInputElement) => {
                                            infoRef.current![index] = el
                                        }}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        )
                    })}
                    <div s-box="v-box" s-gap="4px">
                        <label htmlFor="user-cicolor">
                            <h6>메인 색상</h6>
                        </label>
                        <div s-box="v-box" s-gap="8px">
                            <Button
                                size="lg"
                                variant="transparent-line"
                                buttonName="색상 선택하기"
                                onClick={() => {
                                    handleModalActive("colorPickerModal")
                                }}
                            />
                        </div>
                    </div>
                </section>
            </BasicContainer>

            <BasicContainer>
                <LinkButton
                    buttonType="button"
                    href={isFirst ? "/home" : "/settings"}
                    size="xl"
                    buttonName={isFirst ? "설정완료" : "변경하기"}
                    length="100%"
                    onClick={() => {
                        handleSubmitInfo(1)
                    }}
                />
                <LinkButton
                    buttonType="button"
                    variant="transparent-line"
                    href={isFirst ? "/home" : "/settings"}
                    size="xl"
                    buttonName={isFirst ? "다음에 설정하기" : "변경취소"}
                    onClick={() => {
                        isFirst && handleSubmitInfo(0)

                        setCustomLightColor(prevFormData.color)
                    }}
                    length="100%"
                />
            </BasicContainer>
            {isModalActive.colorPickerModal && <ColorPickerModal />}
        </>
    )
}

export default CustomFormContainer
