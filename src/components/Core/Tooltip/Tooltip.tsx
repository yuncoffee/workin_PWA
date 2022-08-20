import React, { forwardRef } from "react"
import { iTooltip } from "../../../models/Components/Core/tooltip"
import styles from "./_Tooltip.module.scss"

/**
 * - TooltipBox 컴포넌트와 함께 사용하길 권장합니다.
 * - 부모를 기준으로 위치가 설정되므로 단독 사용 시 부모 및 이벤트를 설정해야합니다.

 * @example
 * ```
 *  <div s-position="relative">
 *      <Tooltip  message="툴팁" />
 * </div>
 *  
 * ```
 */
function Tooltip(
    { message, direction, contentsLength = "short" }: iTooltip,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <div
            className={`${styles.tooltip}`}
            data-c-direction={direction}
            ref={ref}
        >
            <h5 data-c-contentslength={contentsLength}>{message}</h5>
        </div>
    )
}

export default forwardRef(Tooltip)
