import { Dispatch, SetStateAction } from "react"
import { CustomInfo, Device, Theme } from "../../models/Data/common"

export const isDarkMode = () => {
    const _modeSetting = localStorage.getItem("darkmode")
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

/**
 * 커스텀 컬러를 세팅하고 최종 세팅한 커스텀 컬러를 반환하는 함수
 */
export const getPrimaryColor = (color: string) => {
    const _root = document.documentElement
    const _rootDark = document.querySelector(
        `[data-theme="dark"]`,
    ) as HTMLElement
    const _rootStyle = getComputedStyle(_root)
    // 호버 시 컬러를 위한 설정
    const _darkHue = (parseInt(color.split(",")[2].split("%")[0]) - 10)
        .toString()
        .concat("%")

    const _darkColor = color.split(", ")
    _darkColor[2] = _darkHue
    const _darkColorResult = _darkColor.join(",")

    _root.style.setProperty("--sy-pri-normal", `${color}`)
    _root.style.setProperty("--sy-pri-dark", `${_darkColorResult}`)

    // TODO: coffee : 다크모드 추가작업 필요
    // 다크모드 시 설정
    _rootDark?.style.setProperty("--sy-pri-normal", `${color}`)
    _rootDark?.style.setProperty("--sy-pri-dark", `${_darkColorResult}`)

    const hslPrimaryColor = _rootStyle.getPropertyValue("--sy-pri-normal")

    return hslPrimaryColor
}

export const getCustomInfo = (customInfo: CustomInfo, localInfo: string) => {
    const _data = JSON.parse(localInfo)
    const _newInfo = {
        ...customInfo,
        org: _data.org,
        name: _data.name,
        part: _data.part,
        role: _data.role,
        email: _data.email,
        color: _data.color,
        updateat: _data.updateat,
    }
    return _newInfo
}
