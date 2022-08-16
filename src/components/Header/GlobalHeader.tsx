import dayjs from "dayjs"
// import "dayjs/locale/ko"
import { useEffect, useState } from "react"
import styles from "./_Header.module.scss"

function GlobalHeader() {
    const [toDay, setToDay] = useState("")

    useEffect(() => {
        // dayjs.locale("ko")
        const date = dayjs().format("YY-MM-DD").split("-").join(".")
        const day = dayjs().format("ddd")

        const newDate = date.concat(" ", day)

        setToDay(newDate)
    }, [])

    return (
        <header className={styles.globalHeader}>
            <section className={styles.globalHeader__top}>
                <h3>Workin</h3>
            </section>
            <section className={styles.globalHeader__btm}>
                <h3>{toDay}</h3>
            </section>
        </header>
    )
}

export default GlobalHeader
