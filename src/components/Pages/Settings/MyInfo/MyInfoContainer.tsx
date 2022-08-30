import React, { useState } from "react"
import BasicContainer from "../../../Container/BasicContainer"
import Button from "../../../Core/Button/Button"
import Profile from "../../../Core/Profile/Profile"
import styles from "./_MyInfo.module.scss"
import loadsh from "lodash"
import { useRecoilValue } from "recoil"
import { rcCustomInfoAtom } from "../../../../recoil/Common"

function MyInfoContainer() {
    const customInfoAtom = useRecoilValue(rcCustomInfoAtom)

    const [userName, setUserName] = useState(customInfoAtom.myName)
    const [detailInfo, setDetailInfo] = useState({
        team: customInfoAtom.myOrg,
        work: customInfoAtom.myWork,
        email: customInfoAtom.myEmail,
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
