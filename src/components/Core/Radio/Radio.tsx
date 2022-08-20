import React, { forwardRef, useState } from "react"
import { iCheckboxAndRadio } from "../../../models/Components/Core/input"

import styles from "./_Radio.module.scss"

/**
 * - 라디오 컴포넌트 입니다.
 * - checked props를 제어하여 사용합니다.
 * @example
 * ```
 * const list = [{value: "sample1", id: "0"},{value: "sample2", id: "1"}]
 *
 * const [state, setState] = useState([0])
 *
 * list.map((item, index)=>{
 *     return (
 *      <div key={index}>
 *          <Radio
 *              id={`name-${item.id}`}
 *              name={name}
 *              value={item.value}
 *              checked={item.value === state}
 *              onChange={(event)=>{
 *                  handleRadio(event, setState)
 *              }}
 *
 *          />
 *      </div>
 *      )
 * })
 * ```
 */
function Radio(
    {
        onClick,
        onChange,
        onBlur,
        onFocus,
        id,
        className,
        title,
        dataName,
        dataValue,
        dataType,
        dataClick,
        isInvalid,
        isFocus,
        size = "sm",
        name,
        value,
        disabled,
        autoComplete,
        autoFocus,
        type = "radio",
        readOnly,
        required,
        dataIndex,
        checked,
        contentsVisible = true,
    }: iCheckboxAndRadio,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const [_isFocus, _setIsFocus] = useState(isFocus)
    const [_isInvalid, _setIsInvalid] = useState(isInvalid)

    const _handleOnFocus = () => {
        _setIsFocus(true)
    }

    const _handleOnBlur = () => {
        _setIsFocus(false)
        _setIsInvalid(undefined)
    }

    return (
        <div
            className={
                className ? `${styles.radio} ${className}` : `${styles.radio}`
            }
            data-c-size={size}
            title={title}
            data-c-focus={_isFocus}
            data-c-invalid={_isInvalid}
            data-disabled={disabled}
        >
            <label
                htmlFor={id}
                className={checked ? styles.isChecked : undefined}
                data-click={dataClick}
            >
                <span>{contentsVisible && value && value}</span>
            </label>
            <input
                type={type}
                name={name}
                value={value}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                ref={ref}
                id={id}
                data-name={dataName ? dataName : name}
                data-value={dataValue ? dataValue : value}
                data-type={dataType}
                data-click={dataClick}
                data-index={dataIndex}
                onFocus={(event) => {
                    _handleOnFocus()
                    onFocus && onFocus(event)
                }}
                onBlur={(event) => {
                    _handleOnBlur()
                    onBlur && onBlur(event)
                }}
                onChange={(event) => {
                    onChange(event)
                }}
                onClick={onClick}
                checked={checked}
            />
        </div>
    )
}

export default forwardRef(Radio)
