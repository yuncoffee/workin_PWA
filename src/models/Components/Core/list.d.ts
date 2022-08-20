export interface iBasicList {
    children: React.ReactNode
    gap?: string
    display?: "v-box" | "h-box"
    className?: string
}

export interface iListItem {
    children: React.ReactNode
    className?: string
    onClick?: (event?) => void
}
