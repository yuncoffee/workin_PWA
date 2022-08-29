import dayjs from "dayjs"
import { atom } from "recoil"

export const rcDeviceAtom = atom({
    key: "rcDeviceAtom",
    default: {
        device: "",
    },
})

export const rcThemeAtom = atom({
    key: "rcThemeAtom",
    default: {
        theme: "light",
    },
})

export const rcCurrentLocationAtom = atom<{
    location: string
    coordinate: number[]
}>({
    key: "rcCurrentLoactionAtom",
    default: {
        location: "",
        coordinate: [],
    },
})

export const rcCurrentDateAtom = atom({
    key: "rcCurrentDateAtom",
    default: dayjs(),
})

export const rcToDayDateAtom = atom({
    key: "rcToDayDateAtom",
    default: dayjs(),
})
