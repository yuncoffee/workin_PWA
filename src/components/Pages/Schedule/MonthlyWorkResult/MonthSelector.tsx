import { useEffect, useRef, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import { MONTH_LIST } from "../../../../utils/DayjsUtils"
import IconButton from "../../../Core/Button/IconButton"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthSelector() {
    const currentDate = useRecoilValue(rcCurrentDateAtom)
    const monthBtnContainerRef = useRef<HTMLElement>(null)
    const [months, setMonths] = useState(MONTH_LIST)
    const [selected, setSelected] = useState(currentDate.format("MMM"))
    const [isNeedScroll, setIsNeedScroll] = useState(false)

    useEffect(() => {
        const index = parseInt(currentDate.format("M"))
        index > 6 && setIsNeedScroll(true)
    }, [])

    useEffect(() => {
        const target = monthBtnContainerRef.current as HTMLElement
        const targetScrollWidth = target.scrollWidth
        isNeedScroll &&
            target.scrollTo({ left: targetScrollWidth, behavior: "smooth" })
    }, [isNeedScroll])

    const handleSelected = (month: string) => {
        setSelected(month)
    }

    return (
        <article className={styles.monthSelector}>
            <section
                ref={monthBtnContainerRef}
                className={styles.monthBtnContainer}
            >
                {months.map((month, index) => {
                    return (
                        <IconButton
                            variant={
                                selected === month
                                    ? "round"
                                    : "transparent-round-line"
                            }
                            onClick={() => {
                                handleSelected(month)
                            }}
                            id={month}
                            key={index}
                        >
                            {month}
                        </IconButton>
                    )
                })}
            </section>
        </article>
    )
}

export default MonthSelector
