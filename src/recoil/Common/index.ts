import dayjs from "dayjs"
import { atom } from "recoil"
import { CustomInfo, Device, Theme } from "../../models/Data/common"
import { iModal } from "../../models/Data/Modal/modal"

/**
 * 앱을 실행하는 디바이스에 대한 정보
 * @type Device = "and" | "ios" | "web"
 */
export const rcDeviceAtom = atom<{ device: Device | "" }>({
    key: "rcDeviceAtom",
    default: {
        device: "",
    },
})

/**
 * 앱의 라이트모드 다크모드 변경을 위한 atom
 * @type Theme = "light" | "dark"
 */
export const rcThemeAtom = atom<{ theme: Theme }>({
    key: "rcThemeAtom",
    default: {
        theme: "light",
    },
})

/**
 * 앱의 priamry 컬러 변경을 위한 atom
 */

export const rcPrimaryColorAtom = atom<string>({
    key: "rcPrimaryColorAtom",
    default: undefined,
})

/**
 * 앱의 priamry 컬러 설정을 위한 atom
 */
export const rcCustomLightColor = atom({
    key: "rcCustomLightColor",
    default: "0, 0%, 17%",
})

/**
 * 네이버 지도 및 위치정보 데이터를 위한 atom
 */
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

export const rcIsModalActiveAtom = atom<iModal>({
    key: "rcIsModalActiveAtom",
    default: {
        isModalOpen: false,
        calendarModal: false,
        planWorkModal: false,
        recordTimeModal: false,
        changeWorkPlanModal: false,
        addWorkTimeModal: false,
        colorPickerModal: false,
    },
})

/**
 * 화면에 보여질 유저정보 데이터를 위한 atom
 */
export const rcCustomInfoAtom = atom<CustomInfo>({
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

export const rcCurrentAddressAtom = atom({
    key: "rcCurrentAddressAtom",
    default: "주소를 불러오는 중입니다..",
})

export const rcPrevFromData = atom({
    key: "rcPrevFromData",
    default: {
        name: "",
        org: "",
        part: "",
        role: "",
        color: "",
    },
})
