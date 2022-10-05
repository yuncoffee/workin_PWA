import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { reqCurrentAddress } from "../../src/api/NaverMap"
import WorkDetailHeaderContainer from "../../src/components/Pages/Schedule/WorkDetail/WorkDetailHeaderContainer"

import WorkDetailSummaryContainer from "../../src/components/Pages/Schedule/WorkDetail/WorkDetailSummaryContainer"
import { iWorkdata } from "../../src/models/Data/FireBase/workData"

function index() {
    const router = useRouter()

    const { id } = router.query
    const [workData, setWorkData] = useState<iWorkdata | undefined>()

    useEffect(() => {
        reqCurrentAddress(126.9804735, 37.4748823)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

        const _data = localStorage.getItem("workdata")
        if (id) {
            setWorkData(JSON.parse(_data!)[id![0]])
        } else {
            console.log(router.push("/schedule"))
        }
    }, [])

    return (
        <>
            {id && <WorkDetailHeaderContainer id={id[0]} />}
            {workData && <WorkDetailSummaryContainer workData={workData} />}
        </>
    )
}

export default index
