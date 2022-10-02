import React, { useState } from "react"
import BasicContainer from "../../../Container/BasicContainer"
import Button from "../../../Core/Button/Button"
import Profile from "../../../Core/Profile/Profile"
import styles from "./_MyInfo.module.scss"
import loadsh from "lodash"
import { useRecoilValue } from "recoil"
import { rcCustomInfoAtom } from "../../../../recoil/Common"
import LinkButton from "../../../Core/Button/LinkButton"
import { auth } from "../../../../utils/Firebase/firebase"
import { useRouter } from "next/router"

function MyInfoContainer() {
    const router = useRouter()
    const customInfoAtom = useRecoilValue(rcCustomInfoAtom)
    const [userName, setUserName] = useState(customInfoAtom.name)
    const [detailInfo, setDetailInfo] = useState({
        team: customInfoAtom.part,
        work: customInfoAtom.role,
        email: customInfoAtom.email,
    })

    const handleInfoChange = () => {
        console.log("change!")
    }

    const handleLogout = () => {
        auth.signOut()
            .then((res) => {
                localStorage.removeItem("user")
                router.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
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
            <LinkButton
                buttonType="button"
                buttonName="정보 변경요청"
                variant="transparent-line"
                size="mid"
                onClick={handleInfoChange}
                length={"100%"}
                href={"/appsettings"}
            />
            <Button
                buttonName="로그아웃"
                variant="transparent-line"
                size="mid"
                onClick={handleLogout}
            />
        </BasicContainer>
    )
}

export default MyInfoContainer
