import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import BasicContainer from "../../../Container/BasicContainer"
import Button from "../../../Core/Button/Button"
import styles from "./_WorkDetail.module.scss"
interface iWorkDetailHeaderContainer {
    id: string
}

function WorkDetailHeaderContainer({ id }: iWorkDetailHeaderContainer) {
    const [workDate, setWorkDate] = useState<string>()

    useEffect(() => {
        setWorkDate(dayjs(id).format("M.DD ddd"))
    })

    const handleReqWorkDataUpdate = () => {
        console.log("요청!")
    }

    return (
        <BasicContainer className={styles.workDetailHeaderContainer}>
            <section className={styles.workDetailHeaderContainer__item}>
                <h3>{workDate}</h3>
                <Button
                    buttonName="수정요청"
                    onClick={handleReqWorkDataUpdate}
                    variant="transparent-round-line"
                    size="mid"
                    className={styles.updateButton}
                />
            </section>
        </BasicContainer>
    )
}

export default WorkDetailHeaderContainer
