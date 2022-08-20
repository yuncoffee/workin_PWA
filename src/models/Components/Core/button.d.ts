import { UrlObject } from "url"
import { tCsp, tUiSize, tUiColor, tButtonStyle } from "../common"
import { iElements } from "../elements"
import { HTMLAttributeAnchorTarget, MouseEventHandler } from "react"

interface iButton extends iElements {
    buttonName: string
    /**
     * - 버튼을 클릭하였을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     * - 바인딩 할 클릭 이벤트가 없다면 버튼 컴포넌트를 사용하지 않기를 권장합니다.
     */
    onClick: MouseEventHandler<T>
    /**
     * - 컴포넌트의 스타일을 설정하기 위한 props입니다.
     */
    variant?: tButtonStyle
    /**
     * - 컴포넌트의 사이즈를 설정하기 위한 props입니다.
     */
    size?: tUiSize
    /**
     * - 컴포넌트의 컬러를 설정하기 위한 props입니다.
     */
    color?: tUiColor
    name?: string
    value?: string
    autoFocus?: boolean
    disabled?: boolean
    iconName?: string
    iconPosition?: "before" | "after"
    isLoading?: boolean
}

interface iIcon extends iElements {
    /**
     * - 버튼을 클릭하였을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     * - 바인딩 할 클릭 이벤트가 없다면 아이콘 컴포넌트를 사용하지 마세요.
     */
    onClick: MouseEventHandler<T>
    /**
     * - 컴포넌트의 스타일을 설정하기 위한 props입니다.
     */
    variant?: tButtonStyle | "transparent" | "transparent-line"
    /**
     * - 컴포넌트의 사이즈를 설정하기 위한 props입니다.
     */
    size?: tUiSize
    /**
     * - 컴포넌트의 컬러를 설정하기 위한 props입니다.
     */
    color?: tUiColor
    /**
     * - 컴포넌트의 name을 설정하기 위한 props입니다.
     */
    name?: string
    /**
     * - 컴포넌트의 value를 설정하기 위한 props입니다.
     */
    value?: string
    autoFocus?: boolean
    /**
     * - disabled 여부를 설정하기 위한 props입니다.
     */
    disabled?: boolean
    /**
     * - 내부에 아이콘을 생성하기 위한 props입니다.
     */
    iconName?: string
    /**
     * - 내부의 spinner를 조작하기 위한 props입니다.
     */
    isLoading?: boolean
}

interface iButtonSubmit extends iButton {
    form?: string
    formenctype?: string
    formnovalidate?: string
    formmethod?: "get" | "post"
    formtarget?: "_blank" | "_self" | "_parent" | "_top" | string
}

interface iButtonLink extends iButton {
    /**
     * - 링크시킬 주소 혹은 Link prosp의 옵션을 설정할 수 있습니다.
     */
    href: string | UrlObject
    /**
     * - 버튼의 형태를 설정해야 합니다.
     */
    buttonType: "button" | "icon"
    /**
     * - target 속성을 설정할 수 있습니다.
     */
    target?: HTMLAttributeAnchorTarget
    onClick?: MouseEventHandler<T>
    buttonName?: string
}

interface iButtonCsp extends iButton {
    cspName: tCsp
}

interface iButtonGroup extends iElements {
    buttonNameList: string[]
    selected: string
    iconNameList?: string[]
    disabledList?: string[]
    iconPosition?: "before" | "after"
}
