import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react"

export const handleToggleBoolean = (
    event: BaseSyntheticEvent,
    setState: Dispatch<SetStateAction<boolean>>
) => {
    const current = JSON.parse(event.currentTarget.dataset.current)
    setState(!current)
}
