import React, { forwardRef } from "react"
import { iTextarea } from "../../../models/Components/Core/input"
import styles from "./_Input.module.scss"

/**
 * - 텍스트아레아 컴포넌트 입니다.
 * @example
 * ```
 * const handleOnchange = (event)=>{event.target}
 * <Textarea
 *      size="sm"
 *      variant="block"
 *      onChange={(event)=>{handleOnchange(event)}}
 *  />
 * ```
 */
function Textarea(
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
        maxLength = 100,
        minLength,
        readOnly,
        required,
    }: iTextarea,
    ref: React.ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <textarea
            className={
                className
                    ? `${styles.textarea} ${className}`
                    : `${styles.textarea}`
            }
            id={id}
            name={name}
            placeholder={placeholder}
            data-c-size={size}
            data-c-type={variant}
            disabled={disabled}
            data-c-invalid={isInvalid}
            data-c-focus={isFocus}
            style={style ? style : length ? { width: `${length}` } : {}}
            onClick={onClick}
            onChange={(event) => {
                if (event.target.value.length > maxLength) {
                    return false
                } else {
                    onChange && onChange(event)
                }
            }}
            value={value}
            data-value={dataValue ? dataValue : value}
            data-name={dataName ? dataName : name}
            data-index={dataIndex}
            data-type={dataType}
            data-click={dataClick}
            ref={ref}
            title={title}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            readOnly={readOnly}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
}

export default forwardRef(Textarea)
