import { iElements } from "../elements"

export interface iEmptyText extends iElements {
    message: string
    fill?: boolean
}

export interface iEmptyImage extends iElements {
    children: ReactNode
    fill?: boolean
}
