import React, { useState } from "react"
import TeamInfoContainer from "../../src/components/Pages/Team/TeamInfo/TeamInfoContainer"
import { MY_TEAM_INFO_MOCK } from "../../src/components/Pages/Team/TeamInfo/teamInfoMock"

import WeekSelectorContainer from "../../src/components/Pages/Team/WeekSelector/WeekSelectorContainer"

function index() {
    const [tab, setTab] = useState(0)

    return (
        <>
            <WeekSelectorContainer tab={tab} setTab={setTab} />
            <TeamInfoContainer isMyTeam={true} teamInfo={MY_TEAM_INFO_MOCK} />
            <TeamInfoContainer isMyTeam={false} teamInfo={MY_TEAM_INFO_MOCK} />
        </>
    )
}

export default index
