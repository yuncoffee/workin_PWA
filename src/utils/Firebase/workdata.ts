import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite"
import { iWorkdata } from "../../models/Data/FireBase/workData"
import { db } from "./firebase"

export const INIT_WORK_DATA: iWorkdata = {
    starttime: "",
    startworkplace: [],
    workaddress: [],
    endtime: "",
    endworkplace: [],
    work: "",
    workstatus: -1,
    planstarttime: "",
    planendtime: "",
}

export const reqUpdateWorkData = async (key: string, data: any) => {
    const uid = JSON.parse(localStorage.getItem("user")!).uid
    const localData = localStorage.getItem("workdata")
    if (localData && JSON.parse(localData)[key]) {
        console.log("local데이터가 있어요")
        if (JSON.parse(localData)[key].workstatus === 2) {
            // 근무 다 했단 소리네
            console.log("너 근무 다했지?")
            console.log("데이터를 변경할 수 없어!!!!!")
            return
        } else if (JSON.parse(localData)[key].workstatus === 1) {
            // 근무 시작은 찍었네?
            console.log("너 근무 시작했구나?")
            const workDataRef = doc(db, "workdata", uid)
            await updateDoc(workDataRef, {
                [key]: {
                    ...data,
                },
            })
        } else {
            console.log("근무만 변경했꾸나 너?")
            const workDataRef = doc(db, "workdata", uid)
            await updateDoc(workDataRef, {
                [key]: {
                    ...data,
                },
            })
        }
    } else {
        console.log("근무 시작전이구나?")
        const workDataRef = doc(db, "workdata", uid)
        const currentSnap = await getDoc(workDataRef)
        if (currentSnap.exists()) {
            console.log(currentSnap.data())
            console.log("근무를 찍은 적이 있구나")
            if (currentSnap.data()[key]) {
                console.log("오늘 데이터가 있는데?")
                console.log("왜 업데이트가 되니?")
                await updateDoc(workDataRef, {
                    [key]: {
                        ...data,
                    },
                })
            } else {
                await updateDoc(workDataRef, {
                    [key]: {
                        ...data,
                    },
                })
            }
        } else {
            console.log("생전 처음 근무를 찍었구나?")
            await setDoc(workDataRef, {
                [key]: {
                    ...data,
                },
            })
        }
    }
}

export const setLocalWorkdata = async () => {
    const uid = JSON.parse(localStorage.getItem("user")!).uid
    const currentSnap = await getDoc(doc(db, "workdata", uid))
    localStorage.setItem("workdata", JSON.stringify(currentSnap.data()))
}
