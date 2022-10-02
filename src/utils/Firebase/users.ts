import { doc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase"

export const setUserInfo = async () => {
    const docData = {
        stringExample: "Hello world!",
        booleanExample: true,
        numberExample: 3.14159265,
        // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
        arrayExample: [5, true, "hello"],
        nullExample: null,
        objectExample: {
            a: 5,
            b: {
                nested: "foo",
            },
        },
    }
    await setDoc(doc(db, "data", "one"), docData)
        .then((res) => {
            console.log(res, "성공")
        })
        .catch((error) => {
            console.log(error)
        })
}
