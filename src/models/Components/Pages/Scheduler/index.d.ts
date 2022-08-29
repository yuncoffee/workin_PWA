type workData = {
    date: string
    record: {
        status: string
        time: string
    }[]
}

export interface iWorkList {
    workResult: workData
}

export interface iWeeklyTimeContainer {
    weekData: string[][]
}
