export const WEEK_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const MONTH_LIST = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

export const parseMonthToNum = (month: string) => {
    switch (month) {
        case "Jan":
            return 1
            break
        case "Feb":
            return 2
            break
        case "Mar":
            return 3
            break
        case "Apr":
            return 4
            break
        case "May":
            return 5
            break
        case "Jun":
            return 6
            break
        case "Jul":
            return 7
            break
        case "Aug":
            return 8
            break
        case "Sep":
            return 9
            break
        case "Oct":
            return 10
            break
        case "Nov":
            return 11
            break
        case "Dec":
            return 12
            break
        default:
            break
    }
}
