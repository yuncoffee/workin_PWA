import React, { forwardRef } from "react"
import { iOptions } from "../../../models/Components/Core/options"

import styles from "./_Options.module.scss"

/**
 * - 옵션 컴포넌트 입니다.
 * - 셀렉트 컴포넌트, 버튼 컴포넌트와 함께 사용합니다.
 * @example
 * ```
 * const LIST = [{name: "sample1", onClick: ()=>{}},{name: "sample2", onClick: ()=>{}}]
 *
 *  <Options options={LIST}/>
 * ```
 */
function Options(
    {
        options,
        size = "sm",
        variant = "block",
        direction = "btm center",
        contentsAlign = "center",
        optionFill = "fit",
        onMouseLeave,
        commonClick,
        dataName,
        dataType,
        dataValue,
        style,
    }: iOptions,
    ref: React.ForwardedRef<HTMLUListElement>
) {
    return (
        <ul
            className={styles.options}
            data-c-type={variant}
            data-c-direction={direction}
            data-c-size={size}
            data-c-fill={optionFill}
            onMouseLeave={onMouseLeave}
            style={style}
            ref={ref}
        >
            {options &&
                options.map((option, index) => {
                    return (
                        <li
                            data-c-type={variant}
                            data-name={dataName ? dataName : option.name}
                            data-type={dataType}
                            data-value={dataValue ? dataValue : option.name}
                            data-index={index}
                            data-c-size={size}
                            key={index}
                            data-c-contents-align={contentsAlign}
                            onClick={(event) => {
                                option.onClick
                                    ? option.onClick(event)
                                    : console.log("전달받은 이벤트가 없어요")
                                commonClick && commonClick(event)
                            }}
                            className={styles.options__item}
                        >
                            {option.name}
                        </li>
                    )
                })}
        </ul>
    )
}

export default forwardRef(Options)
