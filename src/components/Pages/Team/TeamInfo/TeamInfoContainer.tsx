import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import {
    iTeamInfoContainer,
    tTeamInfo,
} from "../../../../models/Components/Pages/Team"
import { rcCustomInfoAtom } from "../../../../recoil/Common"
import BasicContainer from "../../../Container/BasicContainer"
import TeamInfo from "./TeamInfo"
import { MY_TEAM_INFO_MOCK } from "./teamInfoMock"

import styles from "./_TeamInfo.module.scss"

function TeamInfoContainer({ isMyTeam }: iTeamInfoContainer) {
    const [teamInfo, setTeamInfo] = useState<tTeamInfo>({
        name: "",
        member: [],
    })

    const customInfoAtom = useRecoilValue(rcCustomInfoAtom)

    useEffect(() => {
        const _mockMember = [customInfoAtom.myName, "김두한", "구마적"]
        const _newInfo = {
            ...teamInfo,
            name: customInfoAtom.myOrg,
            member: _mockMember,
        }
        setTeamInfo(_newInfo)
    }, [])

    useEffect(() => {
        console.log(teamInfo)
    }, [teamInfo])

    return (
        <BasicContainer
            title={isMyTeam ? "내 부서정보" : "타 부서정보"}
            className={styles.teamInfoContainer}
        >
            <TeamInfo teamInfo={isMyTeam ? teamInfo : MY_TEAM_INFO_MOCK} />
        </BasicContainer>
    )
}

export default TeamInfoContainer
