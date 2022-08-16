import { atom } from "recoil"

export const rcDeviceAtom = atom({
    key: "rcDeviceAtom",
    default: {
        device: "",
    },
})
