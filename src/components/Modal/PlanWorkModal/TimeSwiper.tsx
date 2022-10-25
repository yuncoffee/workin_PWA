import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { WORK_TIME_LIST } from "../../../utils/WorkUtils"
import { iTimeSwiper } from "../../../models/Components/Layout/modal"
import styles from "./_PlanWorkModal.module.scss"

function TimeSwiper({
    selectedPlan,
    setSelectedPlan,
    index,
    setSwiperList,
    swiperList,
    disabled,
}: iTimeSwiper) {
    const [selected, setSelected] = useState<number>()

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
                allowTouchMove={!disabled}
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
