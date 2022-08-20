/**
 * 체크박스 제어
 * @param state - 체크 된 index 리스트
 * @param setState - state 업데이트 함수
 * @param index - 체크박스의 index
 */
import React from "react"

export const handleCheckbox = (
    state: number[],
    setState: React.Dispatch<React.SetStateAction<number[]>>,
    index: number
) => {
    const _self = [index]
    let _newArray

    if (state.includes(index)) {
        _newArray = state.filter((checkboxIndex: number) => {
            return checkboxIndex !== index
        })
    } else {
        _newArray = _self.concat(state)
    }
    setState(_newArray)
}

/**
 * 체크박스 전체 선택
 * @param list - map을 사용한 체크박스 list
 * @param state - 체크 된 index 리스트
 * @param setState - state 업데이트 함수
 */
export const handleCheckboxAll = (
    list: any[],
    state: number[],
    setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
    const _list = list.map((item, index) => {
        return index
    })

    if (list.length === state.length) {
        setState([])
    } else {
        setState(_list)
    }
}
