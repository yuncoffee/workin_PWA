import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import styles from "./_PlanWorkModal.module.scss"
import { iTimeSwiper } from "../../../models/Components/Layout/modal"

function TimeSwiper({
    selectedPlan,
    setSelectedPlan,
    index,
    setSwiperList,
    swiperList,
}: iTimeSwiper) {
    const [selected, setSelected] = useState<number>()
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
        const _changed = WORK_TIME_LIST[selected!]
        const _newArr = [...selectedPlan]
        _newArr[index] = _changed
        setSelectedPlan(_newArr)
    }, [selected])

    return (
        <article className={styles.timeSwiper}>
            <Swiper
                className={styles.timeSwiperContainer}
                direction="vertical"
                spaceBetween={8}
                slidesPerView={1}
                onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
                onSwiper={(swiper) => {
                    setSwiperList([...swiperList, (swiperList[index] = swiper)])
                }}
            >
                {WORK_TIME_LIST.map((time, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className={styles.timeSwiperItem}
                        >
                            <h4>{time}</h4>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </article>
    )
}

export default TimeSwiper
