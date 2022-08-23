import dayjs from "dayjs"
import { useRouter } from "next/router"
// import "dayjs/locale/ko"
import { useEffect, useState } from "react"
import styles from "./_Header.module.scss"

function GlobalHeader() {
    const [toDay, setToDay] = useState("")
    const [isBtmShow, setIsBtmShow] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // dayjs.locale("ko")
        const date = dayjs().format("YY-MM-DD").split("-").join(".")
        const day = dayjs().format("ddd")

        const newDate = date.concat(" ", day)

        setToDay(newDate)
    }, [])

    useEffect(() => {
        console.log(router.pathname)
        if (router.pathname === "/home") {
            setIsBtmShow(true)
        } else {
            setIsBtmShow(false)
        }
    }, [router.pathname])

    return (
        <header className={styles.globalHeader}>
            <section className={styles.globalHeader__top}>
                <h3>Workin</h3>
            </section>
            {isBtmShow && (
                <section className={styles.globalHeader__btm}>
                    <h3>{toDay}</h3>
                </section>
            )}
        </header>
    )
}

export default GlobalHeader
