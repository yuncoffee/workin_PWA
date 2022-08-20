import styles from "./_Table.module.scss"

interface iTableHeader {
    tableHeaderList: string[]
}

function TableHeader({ tableHeaderList }: iTableHeader) {
    return (
        <thead className={styles.thead}>
            <tr className={styles.tr}>
                {tableHeaderList.map((tableHeader, index) => {
                    return <th key={index}>{tableHeader}</th>
                })}
            </tr>
        </thead>
    )
}

export default TableHeader
