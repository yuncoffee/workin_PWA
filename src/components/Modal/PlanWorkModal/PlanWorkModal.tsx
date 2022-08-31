import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcCurrentDateAtom } from "../../../recoil/Common"
import { WEEK_LIST } from "../../../utils/DayjsUtils"
import Button from "../../Core/Button/Button"
import IconButton from "../../Core/Button/IconButton"
import ModalContainer from "../ModalContainer"
import TimeSwiper from "./TimeSwiper"
import styles from "./_PlanWorkModal.module.scss"

function PlanWorkModal() {
    const [selectedPlan, setSelectedPlan] = useState<string[]>([])
    const [swiperList, setSwiperList] = useState<any[]>([])
    const currentDateAtom = useRecoilValue(rcCurrentDateAtom)

    useEffect(() => {
        console.log(selectedPlan)
        console.log(currentDateAtom)
    }, [selectedPlan])

    useEffect(() => {
        console.log(swiperList)
    }, [swiperList])

    const handleSetPlan = () => {
        console.log("hh")
    }

    const handleResetPlan = () => {
        // setSelectedPlan()
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
