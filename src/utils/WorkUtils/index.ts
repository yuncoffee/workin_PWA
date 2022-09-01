export const INIT_PLAN_MOCK = [
    ["휴무"],
    ["미설정"],
    ["미설정"],
    ["미설정"],
    ["미설정"],
    ["미설정"],
    ["휴무"],
]

export const WORK_TIME_LIST = [
    "미설정",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "오전 반차",
    "오후 반차",
    "휴무",
]

export const parseStartTimeOnlyToList = (timeList: string[]) => {
    switch (timeList[0]) {
        case "휴무":
            return ["휴무", "휴무"]
            break
        case "미설정":
            return ["미설정", "미설정"]
            break
        case "오전 반차":
            return ["오전 반차", "18:00"]
            break
        case "오후 반차":
            return ["09: 00", "오후 반차"]
            break
        default:
            return timeList
            break
    }
}

export const parseStartTimeToPlanTime = (selectedPlan: string[]) => {
    const _result = selectedPlan.map((plan: string) => {
        switch (plan) {
            case "미설정":
                return ["미설정"]
                break
            case "08:00":
                return ["08:00", "17:00"]
                break
            case "08:30":
                return ["08:30", "17:30"]
                break
            case "09:00":
                return ["09:00", "18:00"]
                break
            case "09:30":
                return ["09:30", "18:30"]
                break
            case "10:00":
                return ["10:00", "19:00"]
                break
            case "오전 반차":
                return ["오전 반차"]
                break
            case "오후 반차":
                return ["오후 반차"]
                break
            case "휴무":
                return ["휴무"]
                break
        }
    })

    return _result
}

export const parseStartTimeToNum = (timeArray: string[][]) => {
    const _result = timeArray.map((item: string[]) => {
        const startData = item && item[0]
        switch (startData) {
            case "미설정":
                return 0
                break
            case "08:00":
                return 1
                break
            case "08:30":
                return 2
                break
            case "09:00":
                return 3
                break
            case "09:30":
                return 4
                break
            case "10:00":
                return 5
                break
            case "오전 반차":
                return 6
                break
            case "오후 반차":
                return 7
                break
            case "휴무":
                return 8
                break
        }
    })
    return _result
}
