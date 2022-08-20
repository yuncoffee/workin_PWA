import { forwardRef } from "react"
import { iInputDateTimeLocal } from "../../../models/Components/Core/input"
import styles from "./_Input.module.scss"
/**
 * - InputDateTimeLocal 컴포넌트 입니다.
 *
 * @example
 *
 * const handleOnchange = (event)=>{event.target}
 * <InputDateTimeLocal
 *      size="sm"
 *      variant="block"
 *      onChange={(event)=>{handleOnchange(event)}}
 *      min={0}
 *      max={100}
 *  />
 */
function InputDateTimeLocal(
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
        placeholder = "null",
        autoComplete,
        autoFocus,
        maxLength,
        readOnly,
        required,
        min,
        max,
        step = 1,
    }: iInputDateTimeLocal,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    return (
        <input
            min={min}
            max={max}
            step={step}
            type="datetime-local"
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
            data-c-focus={isFocus}
            data-c-type={variant}
            data-c-size={size}
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

export default forwardRef(InputDateTimeLocal)
