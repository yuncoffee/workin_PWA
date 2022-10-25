import { Dispatch, ReactNode, RefObject, SetStateAction } from "react"

export type tModalStyle = "btmsheet" | "dialog"

export interface iModalPortal {
    children: ReactNode
    selector: string
}

export interface iModalHeader {
    name: string
    ref?: RefObject<HTMLElement>
}

export interface iModalBody {
    children: ReactNode
}

export interface iModalContainer extends iModalHeader, iModalBody {
    className: string
    type?: tModalStyle
}

export interface iTimeSwiper {
    selectedPlan: string[]
    setSelectedPlan: Dispatch<SetStateAction<string[]>>
    index: number
    setSwiperList: any
    swiperList: any[]
    disabled?: boolean
}

export interface iModalBase {
    setRender: Dispatch<SetStateAction<boolean>>
}

export interface iModalPlanWorkModal extends iModalBase {}

export interface iRecordTimeModal extends iModalBase {}
