import React, { forwardRef } from "react"
import { iInput } from "../../../models/Components/Core/input"
import styles from "./_Input.module.scss"

/**
 * - 범용적인 인풋텍스트 컴포넌트 입니다.
 * @example
 * ```
 * const handleOnchange = (event)=>{event.target}
 * <InputText
 *      size="sm"
 *      variant="block"
 *      onChange={(event)=>{handleOnchange(event)}}
 *  />
 * ```
 */
function InputText(
    {
        onClick,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        id,
        className,
        title,
        style,
        dataName,
        dataValue,
        dataType,
        dataClick,
        dataIndex,
        isInvalid,
        isFocus,
        length,
        size = "sm",
        variant = "block",
        name,
        value,
        disabled,
        placeholder = "내용을 작성해주세요.",
        autoComplete,
        autoFocus,
        type = "text",
        maxLength,
        readOnly,
        required,
        defaultValue,
    }: iInput,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    return (
        <input
            type={type}
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
            onKeyDown={onKeyDown}
            defaultValue={defaultValue}
        />
    )
}

export default forwardRef(InputText)
