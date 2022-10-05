import React, { useEffect, useState } from "react"
import { reqCurrentAddress } from "../../../../api/NaverMap"
import IconButton from "../../../Core/Button/IconButton"
import styles from "./_WorkDetail.module.scss"

interface iWorkPinList {
    time: string
    status: string
    geolocation: string
}

function WorkPinList({ status, time, geolocation }: iWorkPinList) {
    const [isActive, setIsActive] = useState(false)
    const [address, setAddress] = useState()

    useEffect(() => {
        console.log(geolocation)
    }, [])

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <article
            className={styles.workPinList}
            onClick={handleToggle}
            data-active={isActive}
        >
            <section className={styles.workPinList__header}>
                <h5>{status}</h5>
                <div s-box="h-box" s-align="center" s-gap="16px">
                    <h5>{time}</h5>
                    <IconButton
                        iconName="ri-arrow-down-s-line"
                        size="xs"
                        onClick={handleToggle}
                        dataType={isActive}
                        variant="transparent"
                    />
                </div>
            </section>
            <section className={styles.workPinList__body}>
                <h5>{geolocation}</h5>
            </section>
        </article>
    )
}

export default WorkPinList
