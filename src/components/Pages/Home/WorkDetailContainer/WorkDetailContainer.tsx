import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"
import { useRecoilValue } from "recoil"
import { rcWorkStatusAtom } from "../../../../recoil/Common"
import {
    INIT_WORK_DATA,
    reqUpdateWorkData,
    setLocalWorkdata,
} from "../../../../utils/Firebase/workdata"
import { useModalActive } from "../../../../utils/ModalUtils"
import { parseStartTimeOnlyToList } from "../../../../utils/WorkUtils"
import Button from "../../../Core/Button/Button"
import IconButton from "../../../Core/Button/IconButton"
import Textarea from "../../../Core/Input/Textarea"
import styles from "../_home.module.scss"

function WorkDetailContainer() {
    const { handleModalActive } = useModalActive()
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    const workStatusAtom = useRecoilValue(rcWorkStatusAtom)
    const [isOpen, setIsOpen] = useState(false)
    const [workDescritpion, setWorkDescription] = useState<string>()
    const [planInfo, setPlanInfo] = useState<string[]>()
    const [resultInfo, setResultInfo] = useState<any[]>([])
    useEffect(() => {
        const _key = dayjs().format("YYYY-MM-DD")
        const todayWork = JSON.parse(localStorage.getItem("workdata")!)
        const planData = localStorage.getItem("plandata")
        const _planKey = dayjs().week()

        if (planData) {
            if (JSON.parse(planData)[_planKey]) {
                const _plan = parseStartTimeOnlyToList(
                    JSON.parse(planData)[_planKey][dayjs().day()],
                )
                setPlanInfo(_plan)
            }
        }

        const _startTime =
            todayWork && todayWork[_key] && todayWork[_key].starttime
        const _endTime = todayWork && todayWork[_key] && todayWork[_key].endtime

        const _workResult = [_startTime, _endTime]

        setResultInfo(_workResult)
        setWorkDescription(
            todayWork && todayWork[_key] && todayWork[_key].work
                ? todayWork[_key].work
                : undefined,
        )
    }, [workStatusAtom])

    useEffect(() => {
        if (workDescritpion) {
            descriptionRef.current!.value = workDescritpion as string
        } else {
            descriptionRef.current!.value = ""
        }
    }, [workDescritpion])

    const handleToggleContainer = () => {
        setIsOpen(!isOpen)
    }

    const handleSaveDescription = () => {
        const _key = dayjs().format("YYYY-MM-DD")
        const _prev = JSON.parse(localStorage.getItem("workdata")!)

        const _desc = descriptionRef.current!.value

        if (_prev) {
            // 정보를 변경한 적 있음
            if (_prev[_key]) {
                const _data = {
                    ..._prev[_key],
                    work: _desc,
                }
                reqUpdateWorkData(_key, _data).then(() => {
                    setLocalWorkdata()
                })
            } else {
                console.log("없는디요?")
                const _data = {
                    ...INIT_WORK_DATA,
                    work: _desc,
                }
                reqUpdateWorkData(_key, _data).then(() => {
                    setLocalWorkdata()
                })
            }
        } else {
            // 맨 처음
            const _data = {
                ...INIT_WORK_DATA,
                work: _desc,
            }
            reqUpdateWorkData(_key, _data).then(() => {
                setLocalWorkdata()
            })
        }
    }

    const handleChangeWork = (type: number) => {
        if (type === 0) {
            handleModalActive("addWorkTimeModal")
        } else {
            handleModalActive("changeWorkPlanModal")
        }
    }

    return (
        <article className={styles.workDetailContainer} data-click={isOpen}>
            <section
                className={styles.workDetailContainer__header}
                onClick={() => {
                    handleToggleContainer()
                }}
            >
                <h6>오늘의 업무 상세</h6>
                <IconButton
                    iconName="ri-arrow-up-s-line"
                    variant="transparent"
                    onClick={handleToggleContainer}
                />
            </section>
            <section className={styles.workDetailContainer__body}>
                <div s-box="v-box" s-gap="4px">
                    <div s-box="h-box" s-justify="space-between">
                        <h5>오늘의 할일</h5>
                        <IconButton
                            iconName="ri-check-fill"
                            variant="transparent-line"
                            size="xs"
                            onClick={handleSaveDescription}
                        />
                    </div>

                    {workDescritpion ? (
                        <Textarea
                            variant="block-line"
                            length="100%"
                            placeholder="근무정보를 작성해주세요.!"
                            ref={descriptionRef}
                            dataValue={workDescritpion}
                            defaultValue={workDescritpion}
                        />
                    ) : (
                        <Textarea
                            variant="block-line"
                            length="100%"
                            placeholder="근무정보를 작성해주세요.?"
                            ref={descriptionRef}
                        />
                    )}
                </div>
                <div s-divider="line" />
                <div s-box="v-box" s-gap="4px">
                    <h6>근무정보</h6>
                    <div s-box="v-box" s-gap="8px">
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무지</h5>
                            <h5 s-color="sy-gray-09">본사</h5>
                        </div>
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무 시작시간</h5>
                            <h5 s-color="sy-gray-09">
                                {planInfo && planInfo[0]}/
                                <span>
                                    {resultInfo[0] ? resultInfo[0] : "없음"}
                                </span>
                            </h5>
                        </div>
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무 종료시간</h5>
                            <h5 s-color="sy-gray-09">
                                {planInfo && planInfo[1]}/
                                <span>
                                    {resultInfo[1] ? resultInfo[1] : "없음"}
                                </span>
                            </h5>
                        </div>
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무상태</h5>
                            <h5 s-color="sy-gray-09">
                                {workStatusAtom < 1
                                    ? "근무전"
                                    : workStatusAtom === 1
                                    ? "근무중"
                                    : "근무완료"}
                            </h5>
                        </div>
                    </div>
                </div>
                <div s-divider="line" />
                <div s-box="v-box" s-gap="4px">
                    <h6>근무정보 변경</h6>
                    <div s-box="h-box" s-justify={"space-between"}>
                        <h5>근무지 이동</h5>
                        <Button
                            buttonName="이동하기"
                            onClick={() => {
                                handleChangeWork(0)
                            }}
                        />
                    </div>
                    <div s-box="h-box" s-justify={"space-between"}>
                        <h5>근무일정 변경</h5>
                        <Button
                            buttonName="변경요청"
                            onClick={() => {
                                handleChangeWork(1)
                            }}
                        />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default WorkDetailContainer
