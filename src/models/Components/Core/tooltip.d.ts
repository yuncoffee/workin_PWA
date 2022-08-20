import { tOptionUiDirection, tContentsLength } from "../common"

export interface iTooltip {
    message: string | undefined
    direction: tOptionDirection
    contentsLength?: tContentsLength
}

export interface iTooltipBox extends iTooltip {
    children: React.ReactNode
    direction?: tOptionDirection
    style?: React.CSSProperties
}
