import React from "react"
import { iListItem } from "../../../models/Components/Core/list"
import styles from "./_List.module.scss"

/**
 * - 베이직리스트 컴포넌트와 함께 사용되는 리스트아이템 컴포넌트입니다.
 * @example
 * ```
 * <ListItem>
        {컴포넌트 컨텐츠}
 * </ListItem>
 * ```
 */
function ListItem({ className, onClick, children }: iListItem) {
    return (
        <li
            className={
                className ? `${styles.listItem} ${className}` : styles.listItem
            }
            onClick={(event) => {
                onClick && onClick(event)
            }}
        >
            {children}
        </li>
    )
}

export default ListItem
