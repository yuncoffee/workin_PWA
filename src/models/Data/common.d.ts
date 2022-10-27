export type Device = "and" | "ios" | "web"

export type Theme = "light" | "dark"

export interface CustomInfo {
    [key: string]: string | Date
    name: string
    org: string
    part: string
    role: string
    color: string
    email?: string
    updateat?: Date
}
