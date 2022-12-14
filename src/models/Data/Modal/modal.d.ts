export interface iModal {
    [others: string]: boolean
}

export type tModalName =
    | "isModalOpen"
    | "calendarModal"
    | "planWorkModal"
    | "recordTimeModal"
    | "changeWorkPlanModal"
    | "addWorkTimeModal"
    | "colorPickerModal"
