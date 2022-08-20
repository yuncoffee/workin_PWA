/**
 * 라디오 제어
 * @param event - event 객체
 * @param setState - state 업데이트 함수
 */
import React from "react"

export const handleRadio = (
    event: React.BaseSyntheticEvent,
    setState: React.Dispatch<React.SetStateAction<string>>
) => {
    setState(event.target.value)
}
