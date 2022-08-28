import React from "react"
import { iBasicContainer } from "../../models/Components/Layout/layout"
import styles from "./_Container.module.scss"

function BasicContainer({
    title,
    children,
    headerChildren,
    tab,
    className,
}: iBasicContainer) {
    return (
        <article
            className={
                className
                    ? `${styles.basicContainer} ${className}`
                    : styles.basicContainer
            }
        >
            {tab}
            <section className={styles.basicContainer__header}>
                <h3>{title}</h3>
                {headerChildren && (
                    <div s-box="h-box" s-gap="4px">
                        {headerChildren}
                    </div>
                )}
            </section>
            <section className={styles.basicContainer__body}>
                {children}
            </section>
        </article>
    )
}

export default BasicContainer
