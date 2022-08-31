import { useState } from "react"
import Button from "../../../Core/Button/Button"
import IconButton from "../../../Core/Button/IconButton"
import Textarea from "../../../Core/Input/Textarea"
import styles from "../_home.module.scss"

function WorkDetailContainer() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleContainer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <article className={styles.workDetailContainer} data-click={isOpen}>
            <section
                className={styles.workDetailContainer__header}
                onClick={() => {
                    handleToggleContainer()
                }}
            >
                <h6>Today work details</h6>
                <IconButton
                    iconName="ri-arrow-up-s-line"
                    variant="transparent"
                    onClick={handleToggleContainer}
                />
            </section>
            <section className={styles.workDetailContainer__body}>
                <div s-box="v-box" s-gap="4px">
                    <h5>오늘의 할일</h5>
                    <Textarea
                        variant="block-line"
                        length="100%"
                        placeholder="근무정보를 작성해주세요."
                    />
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
                            <h5 s-color="sy-gray-09">10:00</h5>
                        </div>
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무 종료시간</h5>
                            <h5 s-color="sy-gray-09">19:00</h5>
                        </div>
                        <div s-box="h-box" s-justify="space-between">
                            <h5>근무상태</h5>
                            <h5 s-color="sy-gray-09">근무전</h5>
                        </div>
                    </div>
                </div>
                <div s-divider="line" />
                <div s-box="v-box" s-gap="4px">
                    <h6>근무정보 변경</h6>
                    <div s-box="h-box" s-justify={"space-between"}>
                        <h5>근무지 이동</h5>
                        <Button buttonName="이동하기" onClick={() => {}} />
                    </div>
                    <div s-box="h-box" s-justify={"space-between"}>
                        <h5>근무일정 변경</h5>
                        <Button buttonName="변경요청" onClick={() => {}} />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default WorkDetailContainer
