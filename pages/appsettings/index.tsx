import dynamic from "next/dynamic"
import React from "react"

function index() {
    const CSRComponent = dynamic(
        import("../../src/components/Container/CustomFormContainer"),

        {
            ssr: false,
        },
    )

    return <CSRComponent />
}

export default index
