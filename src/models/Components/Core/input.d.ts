import React from "react"
import { tUiSize, tInputStyle } from "../common"
import { iElements } from "../elements"

/**
 * - Input- 컴포넌트의 베이스 인터페이스입니다.
 * @example
 * interface iInput extends iInput
 */
export interface iInput extends iElements {
    /**
     * - 컴포넌트의 스타일을 설정하기 위한 props입니다.
     */
    variant?: tInputStyle
    /**
     * - 컴포넌트의 사이즈를 설정하기 위한 props입니다.
     */
    size?: tUiSize
    /**
     * - 컴포넌트의 name을 설정하기 위한 props입니다.
     * - 그룹화를 위해 주로 사용됩니다.
     */
    name?: string
    /**
     * - 컴포넌트의 value를 설정하기 위한 props입니다.
     */
    value?: string
    /**
     * - 컴포넌트의 placeholder를 설정하기 위한 props입니다.
     */
    placeholder?: string
    /**
     * - 컴포넌트의 자동완성여부를 설정하기 위한 props입니다.
     */
    autoComplete?: "on" | "off"
    /**
     * - 컴포넌트의 type을 설정하기 위한 props입니다.
     * - 변경을 권장하지 않습니다.
     */
    type?: string
    /**
     * - 컴포넌트의 사이즈를 설정하기 위한 props입니다.
     * - 변경을 권장하지 않습니다.
     */
    size?: string
    /**
     * - 컴포넌트의 src를 설정하기 위한 props입니다.
     */
    src?: string
    /**
     * - 컴포넌트의 alt를 설정하기 위한 props입니다.
     */
    alt?: string
    /**
     * - value의 최대 길이를 설정하기 위한 props입니다.
     */
    maxLength?: number
    /**
     * - 포커스 여부를 설정하기 위한 props입니다.
     */
    autoFocus?: boolean
    /**
     * - 컴포넌트의 disabled 여부를 설정하기 위한 props입니다.
     */
    disabled?: boolean
    /**
     * - 컴포넌트의 읽기전용 여부를 설정하기 위한 props입니다.
     */
    readOnly?: boolean
    /**
     * - 컴포넌트의 필수작성 여부를 설정하기 위한 props입니다.
     */
    required?: boolean
}

export interface iInputNumber extends iInput {
    /**
     * - value의 변경 단계를 설정하기 위한 props입니다.
     */
    step?: number | string
    /**
     * - value의 최소값을 설정하기 위한 props입니다.
     */
    min?: number | string
    /**
     * - value의 최대값을 설정하기 위한 props입니다.
     */
    max?: number | string
}

export interface iInputDateTimeLocal extends iInput {
    /**
     * - value의 변경 단계를 설정하기 위한 props입니다.
     */
    step?: number | string
    /**
     * - Date 범위의 최소값을 설정하기 위한 props입니다.
     */
    min?: string
    /**
     * - Date 범위의 최대값을 설정하기 위한 props입니다.
     */
    max?: string
}

export interface iInputSearch extends iInput {
    /**
     * - 검색 시 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onSearch: React.FormEventHandler<T>
}

export interface iTextarea extends iInput {
    /**
     * - value의 최대값을 설정하기 위한 props입니다.
     */
    maxLength?: number
    /**
     * - value의 최솟값을 함수를 설정하기 위한 props입니다.
     */
    minLength?: number
}

export interface iCheckboxAndRadio extends iInput {
    /**
     * - checkbox & radio의 체크 상태 변경 시 발생하는 이벤트함수를 설정하기 위한 props입니다.
     * - 체크 상태 제어를 위해 사용됩니다.
     *
     * @example
     * ```
     * 추천유틸
     * handleCheckbox(state, setState, index) - 체크박스 제어
     * handleCheckboxAll(list, state, setState) - 체크박스 전체 선택
     *
     * handleRadio(event, setState) - 라디오 제어
     *
     * onChange={(event)=>{
     *      //체크박스
     *      handleCheckbox(checkboxState, setCheckboxState, index)
     *      //라디오
     *      handleRadio(event, setRadioState)
     * }}
     * ```
     */
    onChange: React.FormEventHandler<T>
    /**
     * - 각각의 컴포넌트를 구분하기 위해 사용되는 id를 설정하기 위한 props입니다.
     * @example
     * ```
     * name={"체크박스 그룹명"}
     * id={`체크박스 그룹명-${index}`}
     * ```
     */
    id: string
    /**
     * - checkbox & radio의 그룹화를 위해 사용되는 name을 설정하기 위한 props입니다.
     * @example
     * ```
     * name={"체크박스 그룹명"}
     * ```
     */
    name: string
    /**
     * - checkbox & radio가 가진 값을 의미하는 value를 설정하기 위한 props입니다.
     * - 체크 상태 제어를 위해 사용됩니다.
     */
    value: string
    /**
     * - checkbox & radio의 체크 상태 제어를 위해 사용되는 checked를 설정하기 위한 props입니다.
     * @example
     * ```
     * //checkbox
     * checked={state.includes(index)}
     *
     * //radio
     * checked={state === value}
     * ```
     */

    checked: boolean
    /**
     * - 컨텐츠가 화면에 보여지는지 여부를 설정하기 위한 props입니다.
     * - false 시 라벨을 제거할 수 있습니다.
     */
    contentsVisible?: boolean
}
