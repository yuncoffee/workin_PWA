import styles from "./_Table.module.scss"
import React from "react"

interface iTableBody {
    children: React.ReactNode
}

function TableBody({ children }: iTableBody) {
    return <tbody className={styles.tbody}>{children}</tbody>
}

export default TableBody
