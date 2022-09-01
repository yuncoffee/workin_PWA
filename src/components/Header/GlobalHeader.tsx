import dayjs from "dayjs"
import { useRouter } from "next/router"
// import "dayjs/locale/ko"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcCustomInfoAtom } from "../../recoil/Common"
import styles from "./_Header.module.scss"

function GlobalHeader() {
    const customInfoAtom = useRecoilValue(rcCustomInfoAtom)
    const [toDay, setToDay] = useState("")
    const [companyTitle, setCompanyTitle] = useState(customInfoAtom.companyName)
    const [isBtmShow, setIsBtmShow] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const date = dayjs().format("YY-MM-DD").split("-").join(".")
        const day = dayjs().format("ddd")

        const newDate = date.concat(" ", day)

        setToDay(newDate)
    }, [])

    useEffect(() => {
        setCompanyTitle(customInfoAtom.companyName)
    }, [customInfoAtom])

    useEffect(() => {
        console.log(router.pathname)
        if (router.pathname === "/home" || router.pathname === "/settings") {
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
                    {router.pathname === "/home" ? (
                        <h3>{toDay}</h3>
                    ) : (
                        <h1>{companyTitle}</h1>
                    )}
                </section>
            )}
        </header>
    )
}

export default GlobalHeader
