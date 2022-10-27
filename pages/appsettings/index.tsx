import dynamic from "next/dynamic"
import React, { useEffect } from "react"
import { useRecoilState } from "recoil"
import { rcCustomInfoAtom, rcPrevFromData } from "../../src/recoil/Common"

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
