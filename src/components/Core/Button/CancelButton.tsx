import React, { forwardRef } from "react"
import { iButton } from "../../../models/Components/Core/button"
import Spinner from "../Spinner/Spinner"
import styles from "./_Button.module.scss"

/**
 * - 취소 버튼 컴포넌트 입니다.
 * - 특정 인터랙션을 종료하고자 할 때 사용하기를 권장합니다.

 * @example
 * ```
 *
 *  <CancelButton onClick={handleClose()}/>
 * ```
 */
function CancelButton(
    {
        buttonName = "cancel",
        onClick = () => {
            console.log("이벤트가 없습니다.")
        },
        length,
        style,
        dataName,
        dataValue,
        dataType,
        dataClick,
        dataIndex,
        size = "sm",
        variant = "block",
        name,
        disabled,
        id,
        className,
        title,
        autoFocus,
        iconName,
        iconPosition = "after",
        value,
        isLoading,
        color = "gray",
    }: iButton,
    ref: React.ForwardedRef<HTMLButtonElement>
) {
    return (
        <button
            data-c-size={size}
            data-c-type={variant}
            type="button"
            id={id}
            title={title}
            className={
                className ? `${className} ${styles.button}` : styles.button
            }
            name={name}
            onClick={onClick}
            autoFocus={autoFocus}
            disabled={disabled}
            ref={ref}
            style={style ? style : length ? { width: `${length}` } : {}}
            data-name={dataName ? dataName : name}
            data-value={dataValue ? dataValue : value}
            data-type={dataType}
            data-click={dataClick}
            data-index={dataIndex}
            data-c-color={color}
        >
            {isLoading &&
                (color === "white" ? (
                    <Spinner
                        size={size !== "xs" ? "sm" : "xs"}
                        color={
                            variant === "block" ||
                            variant === "box" ||
                            variant === "round"
                                ? "gray"
                                : "white"
                        }
                    />
                ) : color === "black" ? (
                    <Spinner
                        size={size !== "xs" ? "sm" : "xs"}
                        color={
                            variant === "block" ||
                            variant === "box" ||
                            variant === "round"
                                ? "white"
                                : "black"
                        }
                    />
                ) : (
                    <Spinner
                        size={size !== "xs" ? "sm" : "xs"}
                        color={
                            variant === "block" ||
                            variant === "box" ||
                            variant === "round"
                                ? "white"
                                : color
                        }
                    />
                ))}
            {!isLoading && iconPosition === "after" && buttonName}
            {!isLoading && iconName && (
                <div
                    className="icon"
                    s-box="h-box"
                    s-justify="center"
                    s-align="center"
                    data-name={dataName}
                    data-type={dataType}
                    data-value={dataValue}
                    data-click={dataClick}
                >
                    <i
                        className={iconName + " ri-1x"}
                        data-name={dataName}
                        data-type={dataType}
                        data-value={dataValue}
                        data-click={dataClick}
                    />
                </div>
            )}
            {!isLoading && iconPosition === "before" && buttonName}
        </button>
    )
}

export default forwardRef(CancelButton)
