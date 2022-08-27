import React from "react"
import { iTeamInfoContainer } from "../../../../models/Components/Pages/Team"
import TeamInfo from "./TeamInfo"
import { MY_TEAM_INFO_MOCK } from "./teamInfoMock"

import styles from "./_TeamInfo.module.scss"

function TeamInfoContainer({ isMyTeam }: iTeamInfoContainer) {
    return (
        <article className={styles.teamInfoContainer}>
            <section>
                <h3>{isMyTeam ? "내 부서정보" : "타 부서정보"}</h3>
                <TeamInfo teamInfo={MY_TEAM_INFO_MOCK} />
            </section>
        </article>
    )
}

export default TeamInfoContainer
