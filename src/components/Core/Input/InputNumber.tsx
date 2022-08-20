import React, { forwardRef } from "react"
import { iInputNumber } from "../../../models/Components/Core/input"
import styles from "./_Input.module.scss"

/**
 * - value type이 number인 인풋 컴포넌트 입니다.
 * @example
 * ```
 * const handleOnchange = (event)=>{event.target}
 * <InputNumber
 *      size="sm"
 *      variant="block"
 *      onChange={(event)=>{handleOnchange(event)}}
 *      min={0}
 *      max={100}
 *      step={1}
 *  />
 * ```
 */
function InputNumber(
    {
        onClick,
        onChange,
        onBlur,
        onFocus,
        id,
        className,
        title,
        style,
        dataName,
        dataValue,
        dataType,
        dataClick,
        dataIndex,
        length,
        isInvalid,
        isFocus,
        size = "sm",
        variant = "block",
        name,
        value,
        disabled,
        placeholder = "null",
        autoComplete,
        autoFocus,
        maxLength,
        readOnly,
        required,
        min = 0,
        max = 100,
        step = 1,
        onWheel,
    }: iInputNumber,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    return (
        <input
            step={step}
            min={min}
            max={max}
            onWheel={onWheel}
            type="number"
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            ref={ref}
            data-c-invalid={isInvalid}
            data-c-type={variant}
            data-c-size={size}
            data-c-focus={isFocus}
            id={id}
            className={
                className ? `${styles.input} ${className}` : `${styles.input}`
            }
            title={title}
            style={style ? style : length ? { width: `${length}` } : {}}
            data-name={dataName}
            data-value={dataValue}
            data-type={dataType}
            data-click={dataClick}
            data-index={dataIndex}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
        />
    )
}

export default forwardRef(InputNumber)
