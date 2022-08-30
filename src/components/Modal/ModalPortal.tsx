import React from "react"
import ReactDOM from "react-dom"
import { iModalPortal } from "../../models/Components/Layout/modal"

function ModalPortal({ children, selector }: iModalPortal) {
    const element =
        typeof window !== "undefined" && document.querySelector(selector)
    return element && children ? ReactDOM.createPortal(children, element) : null
}

export default ModalPortal
