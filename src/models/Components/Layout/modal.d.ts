import { ReactNode } from "react"

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
