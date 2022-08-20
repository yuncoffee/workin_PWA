import { ReactNode } from "react"
import styles from "./_Table.module.scss"

interface iBasicTable {
    className: string
    children: ReactNode
}

function BasicTable({ className, children }: iBasicTable) {
    return <table className={`${styles.table} ${className}`}>{children}</table>
}

export default BasicTable
