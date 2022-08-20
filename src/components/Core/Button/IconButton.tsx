import React, { forwardRef } from "react"
import { iIcon } from "../../../models/Components/Core/button"
import Spinner from "../Spinner/Spinner"
import styles from "./_Button.module.scss"

/**
 * - remix와 함께 사용되는 아이콘 컴포넌트 입니다.
 * - 아이콘의 class명을 iconName으로 사용할 수 있습니다.
 * - remixicon - https://remixicon.com/
 * @example
 * ```
 *  <IconButton iconName="ri-home-line"}/>
 * ```
 */
function IconButton(
    {
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
        value,
        isLoading,
        color = "pri",
    }: iIcon,
    ref: React.ForwardedRef<HTMLButtonElement>
) {
    return (
        <button
            data-c-size={size}
            data-c-type={variant}
            type="button"
            id={id}
            title={title}
            className={className ? `${className} ${styles.icon}` : styles.icon}
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
            {!isLoading && iconName && (
                <i
                    className={iconName + " ri-xl"}
                    data-name={dataName}
                    data-type={dataType}
                    data-value={dataValue}
                    data-click={dataClick}
                />
            )}
        </button>
    )
}

export default forwardRef(IconButton)
