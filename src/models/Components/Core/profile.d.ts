import React, { CSSProperties, MouseEventHandler } from "react"
import { tSize } from "../../components"
import { iElements } from "../elements"

export type tUserState = "isOnline" | "isEdit" | "isOffline" | string

export interface iProfileList {
    project: iProject
    position?: "row" | "column"
}

export interface iProfileIcon extends iElements {
    userId: number
    userState?: tUserState
    onClick?: MouseEventHandler<HTMLDivElement>
    editable?: number
    size?: tSize
}

export interface iProfile {
    src?: string
    size?: tSize
}
