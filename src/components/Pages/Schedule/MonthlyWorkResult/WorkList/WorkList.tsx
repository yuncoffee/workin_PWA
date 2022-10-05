import Link from "next/link"
import React, { useEffect, useState } from "react"
import { iWorkList } from "../../../../../models/Components/Pages/Scheduler"
import IconButton from "../../../../Core/Button/IconButton"
import Tag from "../../../../Core/Notice/Tag"
import styles from "./_WorkList.module.scss"

function WorkList({ workResult }: iWorkList) {
    return (
        <Link href={`/schedule/${workResult[0]}`}>
            <article className={styles.workListItem}>
                <h4>{workResult[0]}</h4>
                <section className={styles.workListItem__contents}>
                    <div s-box="h-box" s-gap="4px">
                        {workResult[1].starttime && (
                            <Tag
                                variant="block"
                                className={styles.status}
                                dataType={"punch in"}
                            >
                                <>
                                    <span>출근시간</span>
                                    <h6>{workResult[1].starttime}</h6>
                                </>
                            </Tag>
                        )}
                        {workResult[1].endtime && (
                            <Tag
                                variant="block"
                                className={styles.status}
                                dataType={"punch out"}
                            >
                                <>
                                    <span>퇴근시간</span>
                                    <h6>{workResult[1].endtime}</h6>
                                </>
                            </Tag>
                        )}
                        {/* {workResult.record.map((item, index) => {
                        return (
                            <Tag
                                className={styles.status}
                                dataType={item.status}
                                key={index}
                                variant="block"
                            >
                                <>
                                    <span>{item.status}</span>
                                    <h6>{item.time}</h6>
                                </>
                            </Tag>
                        )
                    })} */}
                    </div>
                    <IconButton
                        variant="text"
                        iconName="ri-arrow-right-s-line"
                        onClick={() => {}}
                    />
                </section>
            </article>
        </Link>
    )
}

export default WorkList
