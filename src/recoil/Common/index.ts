import { atom } from "recoil"

export const rcDeviceAtom = atom({
    key: "rcDeviceAtom",
    default: {
        device: "",
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
