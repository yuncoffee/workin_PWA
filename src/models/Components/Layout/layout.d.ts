import dayjs from "dayjs"
import { ReactNode } from "react"

export interface iBasicContainer {
    title?: string
    children?: ReactNode
    headerChildren?: ReactNode
    tab?: ReactNode
    className?: string
}

export interface iCalendar {
    selectDate: dayjs.Dayjs
    setSelectDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}
