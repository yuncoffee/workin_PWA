/**
 * 옵션 전체 닫기
 * @param setCurrent - UI open 상태변경 setState 함수
 */
import React from "react"

export const handleCloseOptionIndex = (
    setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
    setTimeout(() => {
        setCurrent(-1)
    }, 100)
}

/**
 * 옵션 닫기
 * @param setCurrent - UI open 상태변경 setState 함수
 */
export const handleCloseOptionBoolean = (
    setCurrent: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setTimeout(() => {
        setCurrent(false)
    }, 100)
}
