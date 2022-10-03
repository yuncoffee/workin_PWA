import React, { useRef } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite"
import BasicContainer from "../../src/components/Container/BasicContainer"
import Button from "../../src/components/Core/Button/Button"
import LinkButton from "../../src/components/Core/Button/LinkButton"
import InputText from "../../src/components/Core/Input/InputText"
import { auth, db } from "../../src/utils/Firebase/firebase"

function index() {
    const AUTH_INFO_TEMPLATE = [
        {
            id: "user-email",
            label: "이메일 주소",
            placeholder: "등록할 이메일 주소를 작성해주세요.",
        },
        {
            id: "user-password",
            label: "비밀번호",
            placeholder: "등록할 비밀번호를 작성해주세요.",
        },
    ]

    const router = useRouter()
    const authRef = useRef<null | HTMLInputElement[]>([])

    const handleSubit = async () => {
        const _email = authRef.current![0].value
        const _password = authRef.current![1].value

        if (_email && _password) {
            createUserWithEmailAndPassword(auth, _email, _password)
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
    }

    return (
        <>
            <BasicContainer title="앱 사용을 위한 정보를 작성해주세요" />
            <BasicContainer title="로그인 정보">
                <section s-box="v-box" s-gap="8px">
                    {AUTH_INFO_TEMPLATE.map((info, index) => {
                        return (
                            <div s-box="v-box" s-gap="4px" key={index}>
                                <label htmlFor={info.id}>
                                    <h6>{info.label}</h6>
                                </label>
                                <InputText
                                    id={info.id}
                                    size="lg"
                                    placeholder={info.placeholder}
                                    ref={(el: HTMLInputElement) => {
                                        authRef.current![index] = el
                                    }}
                                />
                            </div>
                        )
                    })}
                </section>
                <section s-box="h-box" s-gap="8px">
                    <LinkButton
                        buttonType="button"
                        buttonName="이전"
                        href={"/"}
                        size="xl"
                        color="gray"
                        length="120px"
                    />
                    <Button
                        size="xl"
                        buttonName="가입하기"
                        onClick={handleSubit}
                        length="100%"
                    />
                </section>
            </BasicContainer>
        </>
    )
}

export default index
