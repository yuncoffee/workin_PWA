import React, { useState } from "react"
import { iTooltipBox } from "../../../models/Components/Core/tooltip"
import Tooltip from "./Tooltip"

/**
 * - 마우스 호버 시 툴팁을 보여줄 컴포넌트와 함께 사용됩니다.

 * @example
 * ```
 *  <TooltipBox message="툴팁 메세지" direction="btm center" contentsLength="short">
 *      <Button buttonName="툴팁을 가진 버튼" />
 * </TooltipBox>
 *  
 * ```
 */
function TooltipBox({
    message,
    direction = "btm center",
    contentsLength = "short",
    children,
    style,
}: iTooltipBox) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)

    const handleMouseOver = () => {
        setIsTooltipOpen(true)
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsTooltipOpen(false)
        }, 100)
    }

    return (
        <div
            s-position="relative"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            {children}
            {isTooltipOpen && (
                <Tooltip
                    message={message}
                    direction={direction}
                    contentsLength={contentsLength}
                />
            )}
        </div>
    )
}

export default TooltipBox
