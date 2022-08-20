import React from "react"
import { iTag } from "../../../models/Components/Core/notice"

import styles from "./_Notice.module.scss"

/**
 * - 라벨링을 위해 사용되는 Tag 컴포넌트 입니다.
 * @example
 * ```
 * <Tag
 *  contents={'tag label'} // 태그명
 *  variant={"block-line"}
 * />
 * ```
 */
function Tag({
    contents,
    color = "gray",
    className,
    variant = "block-line",
    length,
    style,
    dataType,
    children,
    onClick,
}: iTag) {
    return (
        <label
            s-label="label"
            data-c-type={variant}
            data-name={contents}
            data-c-color={color}
            data-type={dataType}
            onClick={onClick}
            className={
                className ? `${styles.tag} ${className}` : `${styles.tag}`
            }
            style={style ? style : length ? { width: `${length}` } : {}}
        >
            {contents}
            {children}
        </label>
    )
}

export default Tag
