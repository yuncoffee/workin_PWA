import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { rcDeviceAtom } from "../../recoil/Common"

import styles from "./_Nav.module.scss"

function GlobalNav() {
    const router = useRouter()
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    const NAV_LIST = [
        { name: "Home", iconName: "ri-home-6-fill", pathName: "/home" },
        {
            name: "Scheduler",
            iconName: "ri-calendar-event-fill",
            pathName: "/schedule",
        },
        { name: "Team", iconName: "ri-team-fill", pathName: "/team" },
        {
            name: "Settings",
            iconName: "ri-settings-3-fill",
            pathName: "/settings",
        },
    ]

    return (
        <article className={styles.globalNav} data-device={deviceAtom.device}>
            {NAV_LIST.map((navItem, index) => {
                const _path = navItem.pathName.slice(1)
                const _regExp = new RegExp(`/${_path}`)

                return (
                    <section
                        className={styles.globalNav__item}
                        key={index}
                        data-current={_regExp.test(router.pathname)}
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
