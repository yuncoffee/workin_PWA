import React, { useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { rcCustomInfoAtom } from "../../recoil/Common"
import {
    PLAN_MOCK,
    RESULT_MOCK,
} from "../Pages/Schedule/MonthlyWorkResult/WorkList/workDataMock"
import Button from "../Core/Button/Button"
import LinkButton from "../Core/Button/LinkButton"
import InputText from "../Core/Input/InputText"
import BasicContainer from "./BasicContainer"

function CustomFormContainer({ props, defaultValue }: any) {
    const [customInfo, setCustomInfo] = useRecoilState(rcCustomInfoAtom)
    const infoRef = useRef<null | HTMLInputElement[]>([])
    const colorInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        localStorage.setItem("userinfo", JSON.stringify({ ...customInfo }))
    }, [customInfo])

    const handleCustomColor = () => {
        const _value = colorInputRef!.current!.value
        localStorage.setItem("customcolor", _value)
        props.setCustomLightColor(_value)
    }

    const setPlanMockData = () => {
        localStorage.setItem("plandata", JSON.stringify({ ...PLAN_MOCK }))
    }

    const setWorkMockData = () => {
        localStorage.setItem("workrecord", JSON.stringify({ ...RESULT_MOCK }))
    }

    const handleSubmitInfo = () => {
        const _myCompany = infoRef.current![0].value
        const _myName = infoRef.current![1].value
        const _myOrg = infoRef.current![2].value
        const _myWork = infoRef.current![3].value
        const _myEmail = infoRef.current![4].value

        const _newInfo = {
            ...customInfo,
            companyName: _myCompany,
            myName: _myName,
            myOrg: _myOrg,
            myWork: _myWork,
            myEmail: _myEmail,
        }
        setCustomInfo(_newInfo)
        handleCustomColor()
        setPlanMockData()
        setWorkMockData()
    }

    return (
        <>
            <BasicContainer title="앱 사용을 위한 정보를 작성해주세요" />
            <BasicContainer title="회사 정보">
                <section>
                    <div s-box="v-box" s-gap="8px">
                        <div s-box="v-box">
                            <h6>회사명을 작성해주세요</h6>
                            <InputText
                                size="lg"
                                placeholder="회사명을 작성해주세요"
                                defaultValue={
                                    defaultValue && defaultValue.companyName
                                }
                                ref={(el: HTMLInputElement) => {
                                    infoRef.current![0] = el
                                }}
                            />
                        </div>
                        <div s-box="v-box">
                            <h6>CI 컬러를 작성해주세요.</h6>
                            <div s-box="h-box" s-gap="8px">
                                <InputText
                                    size="lg"
                                    placeholder="test"
                                    ref={colorInputRef}
                                    defaultValue={
                                        defaultValue && defaultValue.color
                                    }
                                    length={"calc(100% - 128px)"}
                                />
                                <Button
                                    size="lg"
                                    buttonName="색 변경확인"
                                    length="120px"
                                    onClick={handleCustomColor}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </BasicContainer>
            <BasicContainer title="내 정보">
                <section s-box="v-box">
                    <div s-box="v-box" s-gap="8px">
                        <div s-box="v-box">
                            <h6>내 이름을 작성해주세요</h6>
                            <InputText
                                size="lg"
                                placeholder="내 이름을 작성해주세요"
                                defaultValue={
                                    defaultValue && defaultValue.myName
                                }
                                ref={(el: HTMLInputElement) => {
                                    infoRef.current![1] = el
                                }}
                            />
                        </div>
                        <div s-box="v-box">
                            <h6>내가 속한 조직명을 작성해주세요</h6>
                            <InputText
                                size="lg"
                                placeholder="UI/UX Desgin"
                                defaultValue={
                                    defaultValue && defaultValue.myOrg
                                }
                                ref={(el: HTMLInputElement) => {
                                    infoRef.current![2] = el
                                }}
                            />
                        </div>
                        <div s-box="v-box">
                            <h6>조직에서의 내 역할을 작성해주세요</h6>
                            <InputText
                                size="lg"
                                placeholder="Product Desgin"
                                defaultValue={
                                    defaultValue && defaultValue.myWork
                                }
                                ref={(el: HTMLInputElement) => {
                                    infoRef.current![3] = el
                                }}
                            />
                        </div>
                        <div s-box="v-box">
                            <h6>내 이메일 주소를 작성해주세요</h6>
                            <InputText
                                size="lg"
                                placeholder="dong072815@gmail.com"
                                defaultValue={
                                    defaultValue && defaultValue.myEmail
                                }
                                ref={(el: HTMLInputElement) => {
                                    infoRef.current![4] = el
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
                    buttonName="시작하기"
                    length="100%"
                    onClick={handleSubmitInfo}
                />
            </BasicContainer>
        </>
    )
}

export default CustomFormContainer
