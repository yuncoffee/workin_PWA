import React from "react"

export type tUiSize = "xl" | "lg" | "mid" | "sm" | "xs"
export type tCsp = "azure" | "aws" | "ncloud"
export type tUiStyle =
    | "box"
    | "box-line"
    | "block"
    | "block-line"
    | "round"
    | "round-line"
    | "text"
export type tButtonStyle =
    | tUiStyle
    | "box-ghost"
    | "block-ghost"
    | "round-ghost"
    | "transparent"
    | "transparent-line"
    | "transparent-round"
    | "transparent-round-line"
export type tInputStyle = tUiStyle | "underline"
export type tBadgeStyle = tUiStyle | "circle" | "circle-line"
export type tSelectStyle = "box" | "box-line" | "block" | "block-line"
export type tUiColor =
    | "pri"
    | "sec"
    | "red"
    | "green"
    | "cyan"
    | "lapis"
    | "purple"
    | "pink"
    | "livid"
    | "white"
    | "gray"
    | "black"
    | "critical"
    | "" // 예외

export type tDataset = string | number

export type tOptions = {
    /**
     * - 옵션명
     */
    name: string
    /**
     * - 전달하고자 하는 onClick 이벤트
     */
    onClick?: React.MouseEventHandler<HTMLLIistElement>
}

export type tOptionUiDirection =
    | "left top"
    | "left center"
    | "left btm"
    | "right top"
    | "right center"
    | "right btm"
    | "top left"
    | "top right"
    | "top center"
    | "btm left"
    | "btm right"
    | "btm center"

/**
 * Options 컴포넌트의 contentsAlign props
 */
export type tOptionUiContentsAlign = "left" | "center" | "right"

/**
 * Options 컴포넌트의 size props
 */
export type tOptionUiSize = "fit" | "cover"

export type tFuncVoid = (event?) => void
export type tFuncRetrunable = (event?) => any

export type tContentsLength = "long" | "medium" | "short"
