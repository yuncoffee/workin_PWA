import React from "react"
import { iSpinner } from "../../../models/Components/Core/spinner"
import styles from "./_Spinner.module.scss"

function Spinner({ className, position, size, color = "pri" }: iSpinner) {
    return (
        <div
            className={
                className ? className + " " + styles.spinner : styles.spinner
            }
            data-c-size={size}
            data-c-position={position}
            data-c-color={color}
        />
    )
}

export default Spinner
