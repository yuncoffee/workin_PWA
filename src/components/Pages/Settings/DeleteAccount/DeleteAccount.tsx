import React from "react"
import BasicContainer from "../../../Container/BasicContainer"
import WarningButton from "../../../Core/Button/WarningButton"

function DeleteAccount() {
    const handleDeleteAccount = () => {
        localStorage.clear()
    }

    return (
        <BasicContainer>
            <WarningButton
                buttonName="삭제 요청"
                size="mid"
                onClick={handleDeleteAccount}
            />
        </BasicContainer>
    )
}

export default DeleteAccount
