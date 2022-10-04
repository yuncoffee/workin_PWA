import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
} from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { NextRouter, useRouter } from "next/router"
import { checkFisrtUse } from "../../components/Pages/Auth/SignIn/signUtils"
import { auth, db } from "./firebase"
import { setLocalPlanData } from "./plandata"
import { setLocalWorkdata } from "./workdata"

/**
 *
 * @param router 페이지 이동을 위한 router 객체
 * @param email 사용자가 아이디로 사용할 email
 * @param password 사용자가 사용할 비밀번호
 */
export const reqCreateUser = (
    router: NextRouter,
    email: string,
    password: string,
) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const _user = userCredential.user
            const _userInfo = {
                email: _user.email,
                initDate: new Date(),
            }
            setDoc(doc(db, "users", _user.uid), _userInfo).then(() => {
                localStorage.setItem("isfirst", "true")
                router.push("/")
                setDoc(doc(db, "plandata", _user.uid), {})
                setDoc(doc(db, "workdata", _user.uid), {})
            })
            console.log("success!")
        })
        .catch(function (error) {
            console.error("이메일 가입시 에러 : ", error)
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("이미 사용중인 이메일 입니다.")
                    break
                case "auth/invalid-email":
                    alert("유효하지 않은 메일입니다")
                    break
                case "auth/operation-not-allowed":
                    alert("이메일 가입이 중지되었습니다.")
                    break
                case "auth/weak-password":
                    alert("비밀번호를 6자리 이상 필요합니다")
                    break
            }
        })
}

/**
 *
 * @param router 페이지 이동을 위한 router 객체
 * @param user db를 통해 전달받은 user 정보
 */

export const setUserInfo = async (router: NextRouter, user: User) => {
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        localStorage.setItem("userinfo", JSON.stringify(docSnap.data()))
        router.push("/home")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!")
    }
}

/**
 *
 * @param router 페이지 이동을 위한 router 객체
 * @param email 사용자가 입력한 이메일
 * @param password 사용자가 입력한 비밀번호
 */
export const reqSignIn = (
    router: NextRouter,
    email: string,
    password: string,
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 로그인 성공
            const user = userCredential.user
            localStorage.setItem("user", JSON.stringify(user))
            if (checkFisrtUse()) {
                router.push("/appsettings")
            } else {
                setLocalPlanData().then(() => {
                    setLocalWorkdata().then(() => {
                        setUserInfo(router, user)
                    })
                })
            }
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(
                `에러코드 : ${errorCode}, 에러메세지 : ${errorMessage} `,
            )
        })
}
