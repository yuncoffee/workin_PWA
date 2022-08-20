import { iElements } from "../elements"

interface iToggle extends iElements {
    /**
     * - 토글의 상태를 변경하기 위한 props 입니다.
     */
    toggleState: boolean
    /**
     * - 토글의 상태를 변경하기 위한 props 입니다.
     */
    setToggleState: React.Dispatch<React.SetStateAction<boolean>>

    /**
     * - 컴포넌트의 name을 설정하기 위한 props입니다.
     */
    name?: string
    /**
     * - 컴포넌트의 value를 설정하기 위한 props입니다.
     */
    value?: string
    disabled?: boolean
}
