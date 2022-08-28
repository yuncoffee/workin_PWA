import React, { useEffect, useState } from "react"
import { iTeamInfo } from "../../../../models/Components/Pages/Team"
import MemberInfo from "./MemberInfo/MemberInfo"
import styles from "./_TeamInfo.module.scss"

function TeamInfo({ teamInfo }: iTeamInfo) {
    const [memberInfo, setMemberInfo] = useState<string[]>([])

    useEffect(() => {
        setMemberInfo(teamInfo.member)
    }, [])

    return (
        <article className={styles.teamInfo}>
            <h4>{teamInfo.name}</h4>

            {memberInfo.map((member, index) => {
                return <MemberInfo key={index} member={member} />
            })}
        </article>
    )
}

export default TeamInfo
