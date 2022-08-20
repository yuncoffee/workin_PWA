import { JSONArray, JSONObject } from "../../Data/common"
import {
    tOptionUiDirection,
    tOptionUiSize,
    tOptionUiContentsAlign,
    tOptions,
    tFuncVoid,
    tFuncRetrunable,
    tSelectStyle,
    tUiSize,
} from "../common"
import { iInput } from "./input"

export interface iSelect extends iInput {
    /**
     * - 옵션 컴포넌트에 전달 될 각각의 옵션에 사용될 옵션정보 리스트를 전달하기 위한 위한 props입니다.
     */
    options: tOptions[] | JSONArray
    /**
     * - 선택된 option 객체를 담고 있는 props입니다.
     */
    selectState: tOptions | JSONObject
    /**
     * - 컴포넌트의 스타일을 설정하기 위한 props입니다.
     */
    variant?: tSelectStyle
    /**
     * - 옵션 컴포넌트에 전달 될 variant props입니다.
     */
    optionType?: tSelectStyle
    /**
     * - 옵션 컴포넌트에 전달 될 direction props입니다.
     */
    optionDirection?: tOptionUiDirection
    /**
     * - 옵션 컴포넌트에 전달 될 size props입니다.
     */
    optionSize?: tUiSize
    /**
     * - 옵션 컴포넌트에 전달 될 contentsAlign props입니다.
     */
    optionContentsAlign?: tOptionUiContentsAlign
    /**
     * - 옵션의 길이를 설정하기 위한 props입니다.
     */
    optionFill?: tOptionUiSize
    /**
     * - 공통적으로 발생시킬 onClick 이벤트를 설정하기 위한 props입니다.
     */
    commonClick?: tFuncVoid | tFuncRetrunable
}
