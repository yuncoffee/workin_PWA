import { Dispatch, SetStateAction } from "react"

export interface iWeekSelectorContainer {
    tab: number
    setTab: Dispatch<SetStateAction<number>>
}

export type tTeamInfo = { name: string; member: string[] }

export interface iTeamInfoContainer {
    isMyTeam: boolean
    teamInfo: tTeamInfo
}

export interface iTeamInfo {
    teamInfo: tTeamInfo
}

export interface iMemberInfo {
    member: string
}
