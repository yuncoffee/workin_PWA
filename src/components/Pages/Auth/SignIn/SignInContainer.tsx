import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/router"
import React, { useRef } from "react"
import { auth } from "../../../../utils/Firebase/firebase"
import Button from "../../../Core/Button/Button"
import LinkButton from "../../../Core/Button/LinkButton"
import InputText from "../../../Core/Input/InputText"
import styles from "./_SignIn.module.scss"

function SignInContainer() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSignIn = (email: string, password: string) => {
        // 유효성 체크
        if (email.length <= 0 || password.length <= 0) {
            console.log("작성 다시하세요")
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // 로그인 성공
                    const user = userCredential.user
                    localStorage.setItem("user", JSON.stringify(user))
                    if (checkFisrtUse()) {
                        router.push("/appsettings")
                    } else {
                        router.push("/home")
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
    }

    const checkFisrtUse = () => {
        if (JSON.parse(localStorage.getItem("isfirst")!)) {
            return true
        } else {
            return false
        }
    }

    const checkAuthStatus = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid
                console.log(uid)
                // ...
            } else {
                // User is signed out
                // ...
                console.log("signout!")
            }
        })
    }

    return (
        <article className={styles.signInContainer}>
            <InputText
                type="email"
                size="xl"
                placeholder="이메일을 작성해주세요"
                ref={emailRef}
            />
            <InputText
                type="password"
                size="xl"
                placeholder="비밀번호를 작성해주세요"
                ref={passwordRef}
            />
            <Button
                size="xl"
                buttonName="로그인"
                onClick={() => {
                    const _email = emailRef.current!.value
                    const _password = passwordRef.current!.value

                    handleSignIn(_email, _password)
                }}
            />
            <div s-divider="line" />
            <div>
                <LinkButton
                    buttonType="button"
                    buttonName="회원가입"
                    variant="text"
                    href={"/signup"}
                />

                <Button
                    size="xl"
                    buttonName="로그아웃"
                    variant="text"
                    onClick={() => {
                        auth.signOut()
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }}
                />
            </div>
        </article>
    )
}

export default SignInContainer
