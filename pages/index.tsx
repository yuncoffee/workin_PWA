import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import SignInContainer from "../src/components/Pages/Auth/SignIn/SignInContainer"

export default function Home(props: any) {
    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem("user")) {
            router.push("/home")
        }
    }, [])

    return (
        <>
            <SignInContainer />
        </>
    )
}
