import React, { useState, useEffect, forwardRef } from "react"
import { tOptions } from "../../../models/Components/common"
import { iSelect } from "../../../models/Components/Core/select"
import Options from "../Options/Options"
import { handleCloseOptionBoolean } from "../Options/OptionsUtils"
import styles from "./_Select.module.scss"

/**
 * - 셀렉트 컴포넌트 입니다.
 * - 옵션 컴포넌트를 포함합니다.
 * @example
 * ```
 * const LIST = [{name: "sample1", onClick: ()=>{}},{name: "sample2", onClick: ()=>{}}]
 * const [selected, setSelected] = useState(LIST[0])
 *
 *  <Select options={LIST} selectState={selected} />
 * ```
 */
function Select(
    {
        options,
        selectState,
        isInvalid,
        isFocus,
        readOnly,
        size = "sm",
        variant = "block",
        optionSize = size,
        optionType = variant,
        optionDirection = "btm center",
        optionContentsAlign = "center",
        optionFill = "cover",
        dataName,
        dataType,
        dataValue,
        style,
        length,
        className,
        commonClick,
    }: iSelect,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    const [_isFocus, _setIsFocus] = useState(isFocus)
    const [_isInvalid, _setIsInvalid] = useState(isInvalid)

    useEffect(() => {
        return () => {
            _setIsFocus(false)
        }
    }, [])

    const _handleOnBlur = () => {
        _setIsFocus(false)
        _setIsInvalid(undefined)
    }

    return (
        <div
            className={
                className ? `${styles.select} ${className}` : styles.select
            }
            onClick={() => {
                if (options.length > 0) {
                    _setIsFocus(!_isFocus)
                }
            }}
            ref={ref}
            style={style ? style : length ? { width: `${length}` } : {}}
        >
            <div
                className={
                    _isFocus
                        ? `${styles.select__box} ${styles.isActive}`
                        : styles.select__box
                }
                data-c-size={size}
                data-c-type={variant}
                data-c-focus={_isFocus}
                data-c-invalid={_isInvalid}
            >
                <span>
                    {selectState ? selectState.name : "state가 없습니다."}
                </span>
                <div className={styles.select__icon}>
                    <i className="ri-arrow-drop-down-fill ri-1x" />
                </div>
                {_isFocus && (
                    <Options
                        options={options as tOptions[]}
                        commonClick={(event) => {
                            !readOnly &&
                                handleCloseOptionBoolean(
                                    _setIsFocus as React.Dispatch<
                                        React.SetStateAction<boolean>
                                    >
                                )
                            _handleOnBlur()
                            commonClick && commonClick(event)
                        }}
                        direction={optionDirection}
                        size={optionSize}
                        optionFill={optionFill}
                        contentsAlign={optionContentsAlign}
                        variant={optionType}
                        dataType={dataType}
                        dataValue={dataValue}
                        dataName={dataName}
                    />
                )}
            </div>
        </div>
    )
}

export default forwardRef(Select)
