import {
    tOptionUiDirection,
    tOptionUiSize,
    tOptionUiContentsAlign,
    tSelectStyle,
    tOptions,
    tFuncVoid,
    tFuncRetrunable,
    tUiSize,
} from "../common"
import { iElements } from "../elements"

export interface iOptions extends iElements {
    /**
     * - 각각의 옵션에 사용될 옵션정보 리스트를 전달하기 위한 위한 props입니다.
     */
    options: tOptions[]
    /**
     * - 옵션의 사이즈를 설정하기 위한 props입니다.
     */
    size?: tUiSize
    /**
     * - 옵션의 스타일을 설정하기 위한 props입니다.
     */
    variant?: tSelectStyle
    /**
     * - 옵션이 나타나는 방향을 설정하기 위한 props입니다.
     */
    direction?: tOptionUiDirection
    /**
     * - 옵션 컨텐츠의 정렬 방향을 설정하기 위한 props입니다.
     */
    contentsAlign?: tOptionUiContentsAlign
    /**
     * - 옵션의 길이를 설정하기 위한 props입니다.
     */
    optionFill?: tOptionUiSize
    /**
     * - 포인터가 컴포넌트에서 이탈했을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     *
     * @example
     * ```
     * 추천유틸
     * handleCloseOptionIndex(setCurrent) - 옵션 전체 닫기
     * handleCloseOptionBoolean(setCurrent) - 옵션 닫기
     *
     * onMouseLeave={()=>{
     *      handleCloseOptionIndex(setCurrent)
     * }}
     * ```
     */
    onMouseLeave?: React.MouseEventHandler<HTMLUListElement>
    /**
     * - 공통적으로 발생시킬 onClick 이벤트를 설정하기 위한 props입니다.
     */
    commonClick?: tFuncVoid | tFuncRetrunable
}
