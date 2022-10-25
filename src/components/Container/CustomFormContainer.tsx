import React, { useEffect, useRef, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
    rcCustomInfoAtom,
    rcCustomLightColor,
    rcIsModalActiveAtom,
} from "../../recoil/Common"
import Button from "../Core/Button/Button"
import LinkButton from "../Core/Button/LinkButton"
import InputText from "../Core/Input/InputText"
import BasicContainer from "./BasicContainer"
import { doc, updateDoc } from "firebase/firestore/lite"
import { db } from "../../utils/Firebase/firebase"
import ColorPickerModal from "../Modal/ColorPickerModal/ColorPickerModal"
import { useModalActive } from "../../utils/ModalUtils"

type changeableInfo = {
    [key: string]: string | Date | undefined
    name: string
    org: string
    part: string
    role: string
    color: string
    email?: string
    updateat?: Date
}

function CustomFormContainer({ props, defaultValue }: any) {
    const USER_INFO_TEMPLATE = [
        {
            id: "user-name",
            tag: "name",
            label: "사용자명",
            placeholder: "등록할 사용자명을 작성해주세요.",
        },
        {
            id: "user-org",
            tag: "org",
            label: "내 조직",
            placeholder: "내가 속한 조직명을 작성해주세요",
        },
        {
            id: "user-part",
            tag: "part",
            label: "내 부서",
            placeholder: "내가 속한 부서명을 작성해주세요",
        },
        {
            id: "user-role",
            tag: "role",
            label: "내 역할",
            placeholder: "조직에서의 내 역할을 작성해주세요",
        },
    ]
    const isModalActive = useRecoilValue(rcIsModalActiveAtom)
    const { handleModalActive } = useModalActive()

    const infoRef = useRef<null | HTMLInputElement[]>([])

    const setCustomLightColor = useSetRecoilState(rcCustomLightColor)
    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const [changeableInfo, setChangeableInfo] = useState<changeableInfo | null>(
        null,
    )
    const [isFirst, setIsFirst] = useState(false)

    const [prevColor, setPrevColor] = useState("")

    useEffect(() => {
        if (isFirst) {
            setPrevColor("0, 0%, 0%")
        } else {
            if (localStorage.getItem("customcolor")) {
                setPrevColor(localStorage.getItem("customcolor")!)
            } else {
                localStorage.setItem("customcolor", prevColor)
                setPrevColor("0, 0%, 0%")
            }
        }
    }, [isFirst])

    useEffect(() => {
        localStorage.setItem("userinfo", JSON.stringify({ ...customInfo }))
        const _changeableInfo: changeableInfo = { ...customInfo }

        delete _changeableInfo.updateat
        delete _changeableInfo.email

        setChangeableInfo(_changeableInfo)

        const _isFirst = localStorage.getItem("isfirst")
        if (typeof _isFirst === "string" && JSON.parse(_isFirst)) {
            setIsFirst(true)
        }
    }, [customInfo])

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

    return (
        <>
            <BasicContainer title="앱 사용을 위한 정보를 작성해주세요" />
            <BasicContainer title="회원 정보">
                <section s-box="v-box" s-gap="8px">
                    {USER_INFO_TEMPLATE.map((info, index) => {
                        return (
                            <div s-box="v-box" s-gap="4px" key={index}>
                                <label htmlFor={info.id}>
                                    <h6>{info.label}</h6>
                                </label>
                                <InputText
                                    id={info.id}
                                    size="lg"
                                    placeholder={info.placeholder}
                                    defaultValue={
                                        !isFirst &&
                                        JSON.parse(
                                            localStorage.getItem("userinfo")!,
                                        )[info.tag]
                                    }
                                    ref={(el: HTMLInputElement) => {
                                        infoRef.current![index] = el
                                    }}
                                />
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
                    href={"/home"}
                    size="xl"
                    buttonName={isFirst ? "시작하기" : "변경하기"}
                    length="100%"
                    onClick={() => {
                        handleSubmitInfo(1)
                    }}
                />
                <LinkButton
                    buttonType="button"
                    variant="transparent-line"
                    href={"/home"}
                    size="xl"
                    buttonName={isFirst ? "다음에 설정하기" : "변경취소"}
                    onClick={() => {
                        isFirst && handleSubmitInfo(0)

                        setCustomLightColor(prevColor)
                    }}
                    length="100%"
                />
            </BasicContainer>
            {isModalActive.colorPickerModal && <ColorPickerModal />}
        </>
    )
}

export default CustomFormContainer
