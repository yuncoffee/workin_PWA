import dayjs from "dayjs"
import { atom } from "recoil"
import { iModal } from "../../models/Data/Modal/modal"

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

export const rcPrimaryColorAtom = atom<string>({
    key: "rcPrimaryColorAtom",
    default: undefined,
})

export const rcCustomLightColor = atom({
    key: "rcCustomLightColor",
    default: "0, 0%, 17%",
})

export const rcIsModalActiveAtom = atom<iModal>({
    key: "rcIsModalActiveAtom",
    default: {
        isModalOpen: false,
        calendarModal: false,
        planWorkModal: false,
        recordTimeModal: false,
        changeWorkPlanModal: false,
        addWorkTimeModal: false,
    },
})

export const rcCustomInfoAtom = atom({
    key: "rcCustomInfoAtom",
    default: {
        email: "",
        name: "",
        org: "",
        part: "",
        role: "",
        color: "",
        updateat: new Date(),
    },
})

export const rcWorkStatusAtom = atom({
    key: "rcWorkStatusAtom",
    default: 0,
})
