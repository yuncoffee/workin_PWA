import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { iModalPlanWorkModal } from "../../../models/Components/Layout/modal"
import { rcCurrentDateAtom } from "../../../recoil/Common"
import { WEEK_LIST } from "../../../utils/DayjsUtils"
import { useModalActive } from "../../../utils/ModalUtils"
import Button from "../../Core/Button/Button"
import IconButton from "../../Core/Button/IconButton"
import { INIT_PLAN_MOCK } from "../../Pages/Schedule/MonthlyWorkResult/WorkList/workDataMock"
import ModalContainer from "../ModalContainer"
import TimeSwiper from "./TimeSwiper"
import styles from "./_PlanWorkModal.module.scss"

function PlanWorkModal({ setRender }: iModalPlanWorkModal) {
    const { handleCloseModal } = useModalActive()
    const [selectedPlan, setSelectedPlan] = useState<string[]>([])
    const [swiperList, setSwiperList] = useState<any[]>([])
    const currentDateAtom = useRecoilValue(rcCurrentDateAtom)
    const [initData, setInitData] = useState<any>()

    const WORK_TIME_LIST = [
        "미설정",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "오전 반차",
        "오후 반차",
        "휴무",
    ]

    useEffect(() => {
        console.log(currentDateAtom.day(4).week())
        console.log(localStorage.getItem("plandata"))
        console.log(
            JSON.parse(localStorage.getItem("plandata")!)[
                currentDateAtom.day(4).week()
            ],
        )
        if (
            JSON.parse(localStorage.getItem("plandata")!)[
                currentDateAtom.day(4).week()
            ]
        ) {
            setInitData(
                JSON.parse(localStorage.getItem("plandata")!)[
                    currentDateAtom.day(4).week()
                ],
            )
        } else {
            setInitData(INIT_PLAN_MOCK)
        }
        console.log(initData)
    }, [])

    useEffect(() => {
        console.log(initData)
        if (initData) {
            initSwiper()
        }
    }, [initData])

    useEffect(() => {
        console.log(selectedPlan)
    }, [selectedPlan])

    const handleSetPlan = () => {
        const prevData = JSON.parse(localStorage.getItem("plandata")!)
        const _key = currentDateAtom.day(4).week().toString()
        const newData = { ...prevData, [_key]: parsePlanData(selectedPlan) }
        localStorage.setItem("plandata", JSON.stringify(newData))

        handleCloseModal()
        setRender(true)
    }

    const parsePlanData = (selectedPlan: string[]) => {
        const _result = selectedPlan.map((plan: string) => {
            switch (plan) {
                case "미설정":
                    return ["미설정"]
                    break
                case "08:00":
                    return ["08:00", "17:00"]
                    break
                case "08:30":
                    return ["08:30", "17:30"]
                    break
                case "09:00":
                    return ["09:00", "18:00"]
                    break
                case "09:30":
                    return ["09:30", "18:30"]
                    break
                case "10:00":
                    return ["10:00", "19:00"]
                    break
                case "오전 반차":
                    return ["오전 반차"]
                    break
                case "오후 반차":
                    return ["오후 반차"]
                    break
                case "휴무":
                    return ["휴무"]
                    break
            }
        })

        return _result
    }

    const initSwiper = () => {
        const _num =
            initData &&
            initData.map((item: string[]) => {
                const startData = item && item[0]
                switch (startData) {
                    case "미설정":
                        return 0
                        break
                    case "08:00":
                        return 1
                        break
                    case "08:30":
                        return 2
                        break
                    case "09:00":
                        return 3
                        break
                    case "09:30":
                        return 4
                        break
                    case "10:00":
                        return 5
                        break
                    case "오전 반차":
                        return 6
                        break
                    case "오후 반차":
                        return 7
                        break
                    case "휴무":
                        return 8
                        break
                }
            })

        const _newArr = _num.map((number: number) => {
            return WORK_TIME_LIST[number]
        })

        setSelectedPlan(_newArr)
        swiperList.forEach((swiper, index) => {
            swiper.slideTo(_num[index])
        })
    }

    const handleResetPlan = () => {
        const _resetArr = [0, 0, 0, 0, 0, 0, 0].map((number: number) => {
            return WORK_TIME_LIST[number]
        })

        setSelectedPlan(_resetArr)
        swiperList.forEach((swiper) => {
            swiper.slideTo(0)
        })
    }

    const changeSlide = (type: number, index: number) => {
        switch (type) {
            case 0:
                swiperList[index].slidePrev()
                break
            case 1:
                swiperList[index].slideNext()
                break
            default:
                break
        }
    }

    return (
        <ModalContainer className={styles.planWorkModal} name="일정 계획하기">
            <div s-box="h-box" s-align="center" s-justify="space-between">
                <h2 s-box="h-box" s-gap="4px">
                    <span>{currentDateAtom.day(4).format("YYYY")}년</span>
                    <span>{currentDateAtom.day(4).format("MM")}월</span>
                    {currentDateAtom.week()}주차
                </h2>
                <IconButton
                    iconName="ri-refresh-line"
                    variant="transparent"
                    onClick={handleResetPlan}
                />
            </div>
            <article className={styles.timeSwiperListContainer}>
                {WEEK_LIST.map((day, index) => {
                    return (
                        <div className={styles.timeSwiperListItem}>
                            <h4 s-box="h-box" s-gap="8px">
                                <span>{day}</span>
                                <span>
                                    {currentDateAtom.day(index).format("MM.DD")}
                                </span>
                            </h4>
                            <div s-box="h-box" s-gap="2px" s-align="center">
                                <IconButton
                                    iconName="ri-arrow-up-s-line"
                                    variant="transparent-line"
                                    size="sm"
                                    onClick={() => {
                                        changeSlide(0, index)
                                    }}
                                />

                                <TimeSwiper
                                    setSelectedPlan={setSelectedPlan}
                                    selectedPlan={selectedPlan}
                                    index={index}
                                    setSwiperList={setSwiperList}
                                    swiperList={swiperList}
                                />
                                <IconButton
                                    iconName="ri-arrow-down-s-line"
                                    variant="transparent-line"
                                    size="sm"
                                    onClick={() => {
                                        changeSlide(1, index)
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </article>
            <Button buttonName="적용하기" size="xl" onClick={handleSetPlan} />
        </ModalContainer>
    )
}

export default PlanWorkModal
