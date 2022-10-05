import React, { useEffect } from "react"
import { iWorkdata } from "../../../../models/Data/FireBase/workData"
import BasicContainer from "../../../Container/BasicContainer"
import WorkPinList from "./WorkPinList"
import styles from "./_WorkDetail.module.scss"

interface iWorkDetailSummaryContaine {
    workData: iWorkdata
}

function WorkDetailSummaryContainer({ workData }: iWorkDetailSummaryContaine) {
    useEffect(() => {
        console.log(workData)
    }, [])

    return (
        <BasicContainer className={styles.workDetailSummaryContainer}>
            <section s-box="v-box" s-gap="8px">
                <h6>근무 계획 및 결과</h6>
                <article className={styles.detailContainer}>
                    <div className={styles.infoItem}>
                        <h4>계획 시간</h4>
                        <h4>{workData.planstarttime}</h4>
                        <h4>{workData.planendtime}</h4>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>체크 시간</h4>

                        <h4>{workData.starttime}</h4>
                        <h4>{workData.endtime}</h4>
                    </div>
                </article>
                <h6>근무 결과 상세정보</h6>
                <div s-box="v-box" s-gap="8px">
                    {workData.starttime && (
                        <WorkPinList
                            status="근무시작"
                            time={workData.starttime}
                            geolocation={workData.workaddress[0]}
                        />
                    )}
                    {workData.endtime && (
                        <WorkPinList
                            status="근무종료"
                            time={workData.endtime}
                            geolocation={workData.workaddress[1]}
                        />
                    )}
                </div>
            </section>
        </BasicContainer>
    )
}

export default WorkDetailSummaryContainer
