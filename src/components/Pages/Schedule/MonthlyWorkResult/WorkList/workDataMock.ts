import dayjs from "dayjs"

export const workDataList = [
    {
        date: dayjs("2022-08-27").format("ddd, MMM D, YYYY"),
        record: [
            { status: "punch in", time: "10:00" },
            { status: "punch out", time: "19:00" },
        ],
    },
    {
        date: dayjs("2022-08-28").format("ddd, MMM D, YYYY"),
        record: [
            { status: "punch in", time: "10:00" },
            { status: "punch out", time: "19:00" },
        ],
    },
    {
        date: dayjs("2022-08-29").format("ddd, MMM D, YYYY"),
        record: [
            { status: "punch in", time: "10:00" },
            { status: "punch out", time: "19:00" },
        ],
    },
]
