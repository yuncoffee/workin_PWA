type workData = {
    date: string
    record: {
        status: string
        time: string
    }[]
}

export interface iWorkList {
    workResult: any
}

export interface iWeeklyTimeContainer {
    weekData: string[][]
}
