import { Dispatch, SetStateAction } from "react"
import { Device, Theme } from "../../models/Data/common"

export const isDarkMode = () => {
    const _modeSetting = localStorage.getItem("darkmode")
    console.log("_modeSetting", _modeSetting)
    if (typeof _modeSetting === "object") {
        // 처음 들어가서 세팅 안함
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark"
        } else {
            return "light"
        }
    } else {
        // 다크모드 세팅값 넣어주셈
        return _modeSetting as Theme
    }
}

export const checkUseGeolocation = (
    currentLocation: { location: string; coordinate: number[] },
    setCurrentLocation: Dispatch<
        SetStateAction<{ location: string; coordinate: number[] }>
    >,
) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            setCurrentLocation({
                ...currentLocation,
                coordinate: [latitude, longitude],
            })
        })
    } else {
        alert("위치정보 사용불가")
    }
}

/**
 * 앱을 실행하는 디바이스 체크를 위한 함수
 * @returns Device
 */
export const checkDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.indexOf("android") > -1) {
        //안드로이드
        return "and"
    } else if (
        userAgent.indexOf("iphone") > -1 ||
        userAgent.indexOf("ipad") > -1 ||
        userAgent.indexOf("ipod") > -1
    ) {
        //IOS
        return "ios"
    } else {
        //아이폰, 안드로이드 외 모바일
        return "web"
    }
}

export function rgbToHsl(r: any, g: any, b: any) {
    var min,
        max,
        i,
        l,
        s,
        maxcolor,
        h,
        rgb = []
    rgb[0] = r / 255
    rgb[1] = g / 255
    rgb[2] = b / 255
    min = rgb[0]
    max = rgb[0]
    maxcolor = 0
    for (i = 0; i < rgb.length - 1; i++) {
        if (rgb[i + 1] <= min) {
            min = rgb[i + 1]
        }
        if (rgb[i + 1] >= max) {
            max = rgb[i + 1]
            maxcolor = i + 1
        }
    }
    if (maxcolor == 0) {
        h = (rgb[1] - rgb[2]) / (max - min)
    }
    if (maxcolor == 1) {
        h = 2 + (rgb[2] - rgb[0]) / (max - min)
    }
    if (maxcolor == 2) {
        h = 4 + (rgb[0] - rgb[1]) / (max - min)
    }
    if (isNaN(h as number)) {
        h = 0
    }
    if (h) {
        h = h * 60
        if (h < 0) {
            h = h + 360
        }
    }
    l = (min + max) / 2
    if (min == max) {
        s = 0
    } else {
        if (l < 0.5) {
            s = (max - min) / (max + min)
        } else {
            s = (max - min) / (2 - max - min)
        }
    }
    s = s
    return { h: h, s: s, l: l }
}
