import React, { ReactElement } from "react"
import GlobalNav from "./Nav/GlobalNav"

interface iLayout {
    children: ReactElement
}

function Layout({ children }: iLayout) {
    return (
        <>
            {children}
            <GlobalNav />
        </>
    )
}

export default Layout
