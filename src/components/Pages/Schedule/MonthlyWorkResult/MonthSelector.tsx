import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcCurrentDateAtom } from "../../../../recoil/Common"
import { MONTH_LIST } from "../../../../utils/DayjsUtils"
import IconButton from "../../../Core/Button/IconButton"
import styles from "./_MonthlyWorkResult.module.scss"

function MonthSelector() {
    const [months, setMonths] = useState(MONTH_LIST)
    const currentDate = useRecoilValue(rcCurrentDateAtom)
    const [selected, setSelected] = useState(currentDate.format("MMM"))

    const handleSelected = (month: string) => {
        setSelected(month)
    }

    return (
        <article className={styles.monthSelector}>
            <section className={styles.monthBtnContainer}>
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
