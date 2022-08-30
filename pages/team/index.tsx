import React, { useEffect, useState } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import CalendarModal from "../../src/components/Modal/CalendarModal.tsx/CalendarModal"
import TeamInfoContainer from "../../src/components/Pages/Team/TeamInfo/TeamInfoContainer"
import { MY_TEAM_INFO_MOCK } from "../../src/components/Pages/Team/TeamInfo/teamInfoMock"

import WeekSelectorContainer from "../../src/components/Pages/Team/WeekSelector/WeekSelectorContainer"
import { rcIsModalActiveAtom } from "../../src/recoil/Common"

function index() {
    const [tab, setTab] = useState(0)

    const isModalActive = useRecoilValue(rcIsModalActiveAtom)

    const closeModal = useResetRecoilState(rcIsModalActiveAtom)

    useEffect(() => {
        return () => {
            closeModal()
        }
    }, [])

    return (
        <>
            <WeekSelectorContainer tab={tab} setTab={setTab} />
            <TeamInfoContainer isMyTeam={true} teamInfo={MY_TEAM_INFO_MOCK} />
            <TeamInfoContainer isMyTeam={false} teamInfo={MY_TEAM_INFO_MOCK} />
            {isModalActive.calendarModal && <CalendarModal />}
        </>
    )
}

export default index
