import React, { forwardRef } from "react"
import Link from "next/link"
import { iButtonLink } from "../../../models/Components/Core/button"
import Button from "./Button"
import IconButton from "./IconButton"

/**
 * - 링크와 함께 사용되는 버튼 컴포넌트 입니다.

 * @example
 * ```
 *  - 버튼으로 사용
 *  <LinkButton href="/link" buttonType="button" buttonName="링크버튼"}/>
 * 
 *  - 아이콘으로 사용
 *  <LinkButton href="/link" buttonType="icon" iconName="ri-아이콘"}/>
 * ```
 */
function LinkButton(
    {
        href,
        buttonName,
        buttonType,
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
        color = "pri",
        target,
        children,
    }: iButtonLink,
    ref: React.ForwardedRef<HTMLButtonElement>
) {
    return (
        <Link href={href}>
            <a
                target={target}
                style={style ? style : length ? { width: `${length}` } : {}}
            >
                {buttonType === "button" ? (
                    <Button
                        size={size}
                        buttonName={buttonName!}
                        onClick={onClick}
                        dataName={dataName}
                        dataValue={dataValue}
                        dataClick={dataClick}
                        dataType={dataType}
                        dataIndex={dataIndex}
                        variant={variant}
                        name={name}
                        disabled={disabled}
                        id={id}
                        className={className}
                        title={title}
                        autoFocus={autoFocus}
                        ref={ref}
                        iconName={iconName}
                        iconPosition={iconPosition}
                        value={value}
                        isLoading={isLoading}
                        color={color}
                        length={length}
                    />
                ) : (
                    <IconButton
                        size={size}
                        iconName={iconName}
                        onClick={onClick}
                        dataName={dataName}
                        dataValue={dataValue}
                        dataClick={dataClick}
                        dataType={dataType}
                        dataIndex={dataIndex}
                        variant={variant}
                        name={name}
                        disabled={disabled}
                        id={id}
                        className={className}
                        title={title}
                        autoFocus={autoFocus}
                        value={value}
                        isLoading={isLoading}
                        color={color}
                        ref={ref}
                    />
                )}
            </a>
        </Link>
    )
}

export default forwardRef(LinkButton)
