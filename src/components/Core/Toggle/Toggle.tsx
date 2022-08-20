import React, { useState, forwardRef } from "react"
import { iToggle } from "../../../models/Components/Core/toggle"

import styles from "./_Toggle.module.scss"
/**
 * - boolean값을 변경하기 위한 토글 컴포넌트 입니다.
 *
 *
 *  @example
 * ```
 *  const [toggleState, setToggleState] = useState(false)
 *
 *  <Toggle toggleState={toggleState} setToggleState={setToggleState}}/>
 * ```
 */
function Toggle(
    {
        toggleState,
        setToggleState,
        onClick,
        onChange,
        onBlur,
        onFocus,
        id,
        className,
        title,
        dataName,
        dataType,
        dataClick,
        size = "sm",
        name,
        value,
        disabled,
        dataIndex,
        isFocus,
        isInvalid,
    }: iToggle,
    ref: React.ForwardedRef<HTMLButtonElement>
) {
    const [randomHash] = useState(Math.random().toString(36).substring(2, 11))

    const [_isFocus, _setIsFocus] = useState(isFocus)
    const [_isInvalid, _setIsInvalid] = useState(isInvalid)

    const _handleOnFocus = () => {
        _setIsFocus(true)
    }

    const _handleOnBlur = () => {
        _setIsFocus(false)
        _setIsInvalid(undefined)
    }

    const _handleToggle = (
        event: React.BaseSyntheticEvent,
        setState: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        const current = JSON.parse(event.currentTarget.dataset.current)
        setState(!current)
    }

    return (
        <button
            className={
                className ? styles.toggle + " " + className : styles.toggle
            }
            s-display="flex"
            s-padding="2px"
            data-c-size={size}
            data-type={dataType}
            data-click={dataClick}
            data-value={toggleState?.toString()}
            data-current={toggleState?.toString()}
            data-index={dataIndex}
            data-name={name}
            disabled={disabled}
            id={
                id
                    ? id
                    : dataName
                    ? `toggle-${dataName}-${randomHash}`
                    : `toggle-${name}-${randomHash}`
            }
            title={title}
            ref={ref}
            onFocus={(event) => {
                _handleOnFocus()
                onFocus && onFocus(event)
            }}
            onBlur={(event) => {
                _handleOnBlur()
                onBlur && onBlur(event)
            }}
            onClick={(event) => {
                _handleToggle(event, setToggleState)
                onClick && onClick(event)
            }}
            onChange={onChange}
            data-c-focus={_isFocus}
            data-c-invalid={_isInvalid}
            value={value}
        >
            <div
                className={
                    toggleState?.toString() === "true"
                        ? `${styles.toggle__item} ${styles.isActive}`
                        : styles.toggle__item
                }
                data-type={dataType}
                data-click={dataClick}
                data-current={toggleState?.toString()}
                data-value={toggleState?.toString()}
                data-name={name}
            />
        </button>
    )
}

export default forwardRef(Toggle)
