import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    doc,
} from "firebase/firestore/lite"
import { firebaseConfig } from "../../config/firebase"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { getMessaging } from "firebase/messaging"

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const fcmMessage = getMessaging(app)

// DB정보 가져옴
export async function getWork(db: any) {
    const workResultRef = collection(db, "workresult")

    const citySnapshot = await getDocs(workResultRef)

    const cityList = citySnapshot.docs.map((doc) => doc.data())
    console.log(cityList)
    return cityList
}
