import React from "react"
import { iTeamInfoContainer } from "../../../../models/Components/Pages/Team"
import BasicContainer from "../../../Container/BasicContainer"
import TeamInfo from "./TeamInfo"
import { MY_TEAM_INFO_MOCK } from "./teamInfoMock"

import styles from "./_TeamInfo.module.scss"

function TeamInfoContainer({ isMyTeam }: iTeamInfoContainer) {
    return (
        <BasicContainer
            title={isMyTeam ? "내 부서정보" : "타 부서정보"}
            className={styles.teamInfoContainer}
        >
            <TeamInfo teamInfo={MY_TEAM_INFO_MOCK} />
        </BasicContainer>
    )
}

export default TeamInfoContainer
