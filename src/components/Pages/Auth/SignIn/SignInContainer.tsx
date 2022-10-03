import { useRef } from "react"
import { useRouter } from "next/router"
import { reqSignIn } from "../../../../utils/Firebase/users"
import Button from "../../../Core/Button/Button"
import LinkButton from "../../../Core/Button/LinkButton"
import InputText from "../../../Core/Input/InputText"
import styles from "./_SignIn.module.scss"

function SignInContainer() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // 로그인 시 기능동작
    const handleSignIn = (email: string, password: string) => {
        // 유효성 체크
        if (email.length <= 0 || password.length <= 0) {
            console.log("작성 다시하세요")
        } else {
            reqSignIn(router, email, password)
        }
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
            </div>
        </article>
    )
}

export default SignInContainer
