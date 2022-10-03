import { Dayjs } from "dayjs"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite"
import { Dispatch, SetStateAction } from "react"
import { INIT_PLAN_MOCK, parseStartTimeToPlanTime } from "../WorkUtils"
import { db } from "./firebase"

export const reqCurrentWeekPlanData = async (
    currentDateAtom: Dayjs,
    setInitData: Dispatch<SetStateAction<string[][]>>,
) => {
    const uid = JSON.parse(localStorage.getItem("user")!).uid

    const key = currentDateAtom.day(4).week()

    const localData = localStorage.getItem("plandata")
    // 로컬 데이터가 있으면 로컬 데이터 쓰고
    if (localData && JSON.parse(localData)[key]) {
        console.log(JSON.parse(localData)[key])
        setInitData(Object.values(JSON.parse(localData)[key]))
        return
    } else {
        // 없으면 db 조회하자
        const currentSnap = await getDoc(doc(db, "plandata", uid))
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
}

export const reqUpdatePlanData = async (
    currentDateAtom: Dayjs,
    selectedPlan: string[],
) => {
    const _key = currentDateAtom.day(4).week().toString()
    const uid = JSON.parse(localStorage.getItem("user")!).uid
    const planDataRef = doc(db, "plandata", uid)
    const currentSnap = await getDoc(doc(db, "plandata", uid))

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
}

export const setLocalPlanData = async () => {
    const uid = JSON.parse(localStorage.getItem("user")!).uid
    const currentSnap = await getDoc(doc(db, "plandata", uid))
    localStorage.setItem("plandata", JSON.stringify(currentSnap.data()))
}
