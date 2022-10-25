import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { iModalPlanWorkModal } from "../../../models/Components/Layout/modal"
import { rcCurrentDateAtom, rcToDayDateAtom } from "../../../recoil/Common"
import { WEEK_LIST } from "../../../utils/DayjsUtils"
import {
    reqCurrentWeekPlanData,
    reqUpdatePlanData,
    setLocalPlanData,
} from "../../../utils/Firebase/plandata"
import { useModalActive } from "../../../utils/ModalUtils"
import { parseStartTimeToNum, WORK_TIME_LIST } from "../../../utils/WorkUtils"
import Button from "../../Core/Button/Button"
import IconButton from "../../Core/Button/IconButton"
import ModalContainer from "../ModalContainer"
import TimeSwiper from "./TimeSwiper"
import styles from "./_PlanWorkModal.module.scss"

function PlanWorkModal({ setRender }: iModalPlanWorkModal) {
    const { handleCloseModal } = useModalActive()
    const [selectedPlan, setSelectedPlan] = useState<string[]>([])
    const [swiperList, setSwiperList] = useState<any[]>([])
    const currentDateAtom = useRecoilValue(rcCurrentDateAtom)
    const todayDateAtom = useRecoilValue(rcToDayDateAtom)
    const [initData, setInitData] = useState<any>()

    useEffect(() => {
        reqCurrentWeekPlanData(currentDateAtom, setInitData)
        console.log(currentDateAtom.day())
    }, [])

    useEffect(() => {
        if (initData) {
            initSwiper()
        }
    }, [initData])

    const handleSetPlan = async () => {
        reqUpdatePlanData(currentDateAtom, selectedPlan).then(() => {
            setLocalPlanData()
            handleCloseModal()
            setRender(true)
        })
    }

    const initSwiper = () => {
        const _num = parseStartTimeToNum(initData)
        const _newArr = _num.map((number) => {
            return WORK_TIME_LIST[number!]
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

        const _filteredList = swiperList.filter((list, index) => {
            return index > currentDateAtom.day()
        })

        setSelectedPlan(_resetArr)

        if (currentDateAtom.week() === todayDateAtom.week()) {
            _filteredList.forEach((swiper) => {
                swiper.slideTo(0)
            })
        } else {
            swiperList.forEach((swiper) => {
                swiper.slideTo(0)
            })
        }
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
                    const _disabled =
                        currentDateAtom.week() === todayDateAtom.week() &&
                        currentDateAtom.day() >= index

                    return (
                        <div className={styles.timeSwiperListItem} key={index}>
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
                                    disabled={_disabled}
                                />

                                <TimeSwiper
                                    setSelectedPlan={setSelectedPlan}
                                    selectedPlan={selectedPlan}
                                    index={index}
                                    setSwiperList={setSwiperList}
                                    swiperList={swiperList}
                                    disabled={_disabled}
                                />
                                <IconButton
                                    iconName="ri-arrow-down-s-line"
                                    variant="transparent-line"
                                    size="sm"
                                    onClick={() => {
                                        changeSlide(1, index)
                                    }}
                                    disabled={_disabled}
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
