import React, { useState } from "react"
import BasicContainer from "../../../Container/BasicContainer"
import Button from "../../../Core/Button/Button"
import Profile from "../../../Core/Profile/Profile"
import styles from "./_MyInfo.module.scss"
import loadsh from "lodash"

function MyInfoContainer() {
    const [userName, setUserName] = useState("Coffee")

    const [detailInfo, setDetailInfo] = useState({
        team: "UI/UX Design",
        work: "Product Design",
        email: "coffee@cloudraw.kr",
    })

    const handleInfoChange = () => {
        console.log("change!")
    }

    return (
        <BasicContainer title="내 정보">
            <article className={styles.profileContainer}>
                <Profile />
                <h4>{userName}</h4>
            </article>
            <article className={styles.detailContainer}>
                {Object.entries(detailInfo).map((info, index) => {
                    const _info = loadsh.upperFirst(info[0])

                    return (
                        <div className={styles.infoItem} key={index}>
                            <h4>{_info}</h4>
                            <h4>{info[1]}</h4>
                        </div>
                    )
                })}
            </article>
            <Button
                buttonName="정보 변경요청"
                variant="transparent-line"
                size="mid"
                onClick={handleInfoChange}
            />
        </BasicContainer>
    )
}

export default MyInfoContainer
