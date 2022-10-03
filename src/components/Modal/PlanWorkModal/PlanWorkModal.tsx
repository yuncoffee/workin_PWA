import {
    arrayUnion,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
} from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { iModalPlanWorkModal } from "../../../models/Components/Layout/modal"
import { rcCurrentDateAtom } from "../../../recoil/Common"
import { WEEK_LIST } from "../../../utils/DayjsUtils"
import { db } from "../../../utils/Firebase/firebase"
import { useModalActive } from "../../../utils/ModalUtils"
import {
    INIT_PLAN_MOCK,
    parseStartTimeToNum,
    parseStartTimeToPlanTime,
    WORK_TIME_LIST,
} from "../../../utils/WorkUtils"
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
    const [initData, setInitData] = useState<any>()

    useEffect(() => {
        getPlanData()
    }, [])

    useEffect(() => {
        if (initData) {
            initSwiper()
        }
    }, [initData])

    const isDbHasData = async () => {
        const uid = JSON.parse(localStorage.getItem("user")!).uid
        const currentSnap = await getDoc(doc(db, "plandata", uid))
        const key = currentDateAtom.day(4).week()
        if (currentSnap.data()![key]) {
            return true
        } else {
            return false
        }
    }

    const getPlanData = async () => {
        const uid = JSON.parse(localStorage.getItem("user")!).uid
        const currentSnap = await getDoc(doc(db, "plandata", uid))
        const key = currentDateAtom.day(4).week()

        if (currentSnap.exists()) {
            if (currentSnap.data()[key]) {
                setInitData(Object.values(currentSnap.data()![key]))
            } else {
                setInitData(INIT_PLAN_MOCK)
            }
        } else {
            setInitData(INIT_PLAN_MOCK)
        }
    }

    const handleSetPlan = async () => {
        // const prevData = JSON.parse(localStorage.getItem("plandata")!)
        const _key = currentDateAtom.day(4).week().toString()
        // const newData = {
        //     ...prevData,
        //     [_key]: parseStartTimeToPlanTime(selectedPlan),
        // }
        const uid = JSON.parse(localStorage.getItem("user")!).uid
        // localStorage.setItem("plandata", JSON.stringify(newData))

        const planDataRef = doc(db, "plandata", uid)
        const currentSnap = await getDoc(doc(db, "plandata", uid))
        console.log(currentSnap.data())
        // 데이터 추가
        if (currentSnap.exists()) {
            console.log("update!")
            await updateDoc(planDataRef, {
                [_key]: {
                    ...parseStartTimeToPlanTime(selectedPlan),
                },
            })
        } else {
            console.log("add!")
            await setDoc(planDataRef, {
                [_key]: {
                    ...parseStartTimeToPlanTime(selectedPlan),
                },
            })
        }
        localStorage.setItem("plandata", JSON.stringify(currentSnap.data()))
        handleCloseModal()
        setRender(true)
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
