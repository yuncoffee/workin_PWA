import { Dispatch, ReactNode, SetStateAction } from "react"

export interface iModalPortal {
    children: ReactNode
    selector: string
}

export interface iModalHeader {
    name: string
}

export interface iModalBody {
    children: ReactNode
}

export interface iModalContainer extends iModalHeader, iModalBody {
    className: string
}

export interface iTimeSwiper {
    selectedPlan: string[]
    setSelectedPlan: Dispatch<SetStateAction<string[]>>
    index: number
    setSwiperList: any
    swiperList: any[]
}
