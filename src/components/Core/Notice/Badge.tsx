import React from "react"
import { iBadge } from "../../../models/Components/Core/notice"

import styles from "./_Notice.module.scss"

/**
 * - 알림을 위해 사용되는 뱃지 컴포넌트 입니다.
 * @example
 * ```
 * <Badge
 *  contents={1} // 짤막한 단일 숫자 권장
 *  variant={"circle"}
 * />
 * ```
 */
function Badge({
    contents,
    className,
    variant = "block",
    color,
    length,
    style,
    dataType,
}: iBadge) {
    return (
        <label
            data-c-type={variant}
            data-c-color={color}
            className={
                className ? `${styles.badge} ${className}` : `${styles.badge}`
            }
            data-type={dataType}
            style={style ? style : length ? { width: `${length}` } : {}}
        >
            {contents}
        </label>
    )
}

export default Badge
