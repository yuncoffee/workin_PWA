import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

import styles from "./_Nav.module.scss"

function GlobalNav() {
    const router = useRouter()

    const NAV_LIST = [
        { name: "Home", iconName: "ri-home-6-fill", pathName: "/" },
        {
            name: "Scheduler",
            iconName: "ri-calendar-event-fill",
            pathName: "/scheduler",
        },
        { name: "Team", iconName: "ri-team-fill", pathName: "/team" },
        { name: "ID Card", iconName: "ri-user-3-fill", pathName: "/idcard" },
    ]

    return (
        <article className={styles.globalNav}>
            {NAV_LIST.map((navItem, index) => {
                return (
                    <section
                        className={styles.globalNav__item}
                        key={index}
                        data-current={router.pathname === navItem.pathName}
                    >
                        <Link href={navItem.pathName}>
                            <a>
                                <i className={navItem.iconName} />
                                <span>{navItem.name}</span>
                            </a>
                        </Link>
                    </section>
                )
            })}
        </article>
    )
}

export default GlobalNav
