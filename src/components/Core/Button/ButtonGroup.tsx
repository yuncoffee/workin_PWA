import React, { BaseSyntheticEvent, useEffect, useState } from "react"
import { iButtonGroup } from "../../../models/Components/Core/button"
import styles from "./_Button.module.scss"

function ButtonGroup({
    className,
    buttonNameList,
    selected,
    style,
    length,
    size = "sm",
    variant = "block",
    iconNameList,
    iconPosition = "after",
    dataValue,
    dataType,
    dataClick,
    disabledList,
    id,
    onClick = () => {
        console.log("이벤트가 없습니다.")
    },
}: iButtonGroup) {
    const [_selected, _setSelected] = useState(selected)

    const _handleButtonGroup = (event: BaseSyntheticEvent) => {
        onClick && onClick(event as React.MouseEvent)
        _setSelected(event.target.dataset.name)
    }

    useEffect(() => {
        _setSelected(selected)
    }, [selected])

    return (
        <div
            className={
                className
                    ? `${styles.buttonGroup} ${className}`
                    : `${styles.buttonGroup}`
            }
            style={style ? style : length ? { width: `${length}` } : {}}
            id={id}
            data-c-type={variant}
        >
            {buttonNameList.map((buttonName, index) => {
                const iconName = iconNameList ? iconNameList[index] : undefined

                return (
                    <button
                        key={index}
                        data-c-type={variant}
                        data-c-size={size}
                        data-index={index}
                        data-name={buttonName}
                        name={buttonName}
                        onClick={(event) => _handleButtonGroup(event)}
                        disabled={
                            disabledList && disabledList.includes(buttonName)
                        }
                        className={
                            _selected === buttonName
                                ? styles.button + " " + styles.isActive
                                : styles.button
                        }
                        data-type={dataType}
                        data-value={dataValue}
                        data-click={dataClick}
                    >
                        {iconPosition === "after" && buttonName}
                        {iconName && (
                            <div
                                className="icon"
                                s-box="h-box"
                                s-justify="center"
                                s-align="center"
                                data-name={buttonName}
                                data-type={dataType}
                                data-value={dataValue}
                                data-click={dataClick}
                            >
                                <i
                                    className={iconName + " ri-1x"}
                                    data-name={buttonName}
                                    data-type={dataType}
                                    data-value={dataValue}
                                    data-click={dataClick}
                                />
                            </div>
                        )}
                        {iconPosition === "before" && buttonName}
                    </button>
                )
            })}
        </div>
    )
}

export default ButtonGroup
