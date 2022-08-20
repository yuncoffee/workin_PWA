/**
 * - Elements 계열 컴포넌트들의 베이스 인터페이스입니다.
 * - HTML Global Event Attributes - https://www.w3schools.com/tags/ref_eventattributes.asp
 *
 */
export interface iEvents {
    // form events

    /**
     * 컴포넌트에서 포커싱이 사라질 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onBlur?: React.FormEventHandler<T>
    /**
     * 컴포넌트에서 발생하는 onChange 이벤트 함수를 설정하기 위한 props입니다.
     */
    onChange?: React.FormEventHandler<T>
    /**
     * 컴포넌트가 포커싱되었을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onFocus?: React.FormEventHandler<T>
    /**
     * 컴포넌트에서 발생하는 onSearch 이벤트 함수를 설정하기 위한 props입니다.
     */
    onSearch?: React.FormEventHandler<T>
    /**
     * 컴포넌트에서 발생하는 onSubmit 이벤트 함수를 설정하기 위한 props입니다.
     */
    onSubmit?: React.FormEventHandler<T>

    // keyboard events
    /**
     * 컴포넌트가 포커싱 되었을 때 키보드를 누를 경우 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onKeyDown?: React.KeyboardEventHandler<T>
    /**
     * 컴포넌트가 포커싱 되엇을 때 키보드를 누르고 있는 동안 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onKeypress?: React.KeyboardEventHandler<T>
    /**
     * 컴포넌트가 포커싱 되었을 때 키보드에서 손을 때었을 경우 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onKeyUp?: React.KeyboardEventHandler<T>

    // mouse events
    /**
     * 컴포넌트를 클릭하였을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onClick?: React.MouseEventHandler<T>
    /**
     * 컴포넌트를  더블 클릭하였을 때 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDoubleClick?: React.MouseEventHandler<T>
    /**
     * 포인터가 컴포넌트를 누르고 있는 동안 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onMouseDown?: React.MouseEventHandler<T>
    /**
     * 포인터가 컴포넌트 안에서 움직이고 있는 동안 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onMouseMove?: React.MouseEventHandler<T>
    /**
     * 포인터가 컴포넌트 안에서 밖으로 이탈 시 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onMouseOut?: React.MouseEventHandler<T>
    /**
     * 포인터가 컴포넌트를 이탈 시 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onMouseOver?: React.MouseEventHandler<T>
    /**
     * 포인터가 컴포넌트 안에서 휠을 스크롤할 경우 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onWheel?: React.MouseEventHandler<T>

    // drag events
    /**
     * 포인터가 컴포넌트를 드래그하고 있는 경우 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDrag?: React.DragEventHandler<T>
    /**
     * 포인터가 드래그한 컴포넌트를 놓을 경우 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDrop?: React.DragEventHandler<T>
    /**
     * 포인터가 컴포넌트의 드래그를 끝내는 시점에 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDragEnd?: React.DragEventHandler<T>
    /**
     * 포인터가 컴포넌트의 드래그를 시작하는 시점에 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDragEnter?: React.DragEventHandler<T>
    /**
     * 포인터가 컴포넌트의 드래그 상태를 이탈하는 시점에 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDragLeave?: React.DragEventHandler<T>
    /**
     * 포인터가 컴포넌트의 드래그 상태를 이탈하는 시점에 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDragOver?: React.DragEventHandler<T>
    /**
     * 포인터가 컴포넌트의 드래그를 시작하는 시점에 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onDragStart?: React.DragEventHandler<T>
    /**
     * 스크롤 시 발생하는 이벤트 함수를 설정하기 위한 props입니다.
     */
    onScroll?: React.DragEventHandler<T>
}

/**
 * - Elements 계열 컴포넌트들의 베이스가되는 인터페이스입니다.
 * - HTML Global Attributes - https://www.w3schools.com/tags/ref_standardattributes.asp
 */
export interface iGlobalAttributes {
    // global
    /**
     * - elements의 class명을 설정하기 위한 props입니다.
     */
    className?: string
    /**
     * - elements의 id명을 설정하기 위한 props입니다.
     */
    id?: string
    /**
     * - elements의 title을 설정하기 위한 props입니다.
     * - 호버 시 title의 값이 출력됩니다.
     */
    title?: string
    /**
     * - elements의 innerStyle을 설정하기 위한 props입니다.
     * - style props 사용보다는 해당 컴포넌트의 css/scss을 수정할 것을 권장합니다.
     */
    style?: React.CSSProperties
    /**
     * - name attribute를 대체하기 위해 사용되는 data-name를 설정하기 위한 props입니다.
     */
    dataName?: tDataset
    /**
     * - value attribute를 대체하기 위해 사용되는 data-value를 설정하기 위한 props입니다.
     */
    dataValue?: tDataset
    /**
     * - type attribute를 대체하기 위해 사용되는 data-type을 설정하기 위한 props입니다.
     */
    dataType?: tDataset
    /**
     * - click된 elements를 확인하기 위해 사용되는 data-click을 설정하기 위한 props입니다.
     */
    dataClick?: tDataset
    /**
     * - 해당 elements의 index를 확인하기 위해 사용되는 data-index를 설정하기 위한 props입니다.
     */
    dataIndex?: tDataset
    /**
     * - 해당 elements의 기본 value를 설정하기 위한 props입니다.
     */
    defaultValue?: tDataset
}

/**
 * - Elements 계열 컴포넌트들의 베이스 인터페이스입니다.
 * @example
 * interface iElements extends iEvents, iGlobalAttributes

 */
export interface iElements extends iEvents, iGlobalAttributes {
    /**
     * - 컴포넌트의 사이즈를 설정하기 위한 props 입니다.
     */
    size?: tSize
    /**
     * - 컴포넌트의 스타일을 설정하기 위한 props 입니다.
     */
    variant?: string
    /**
     * - 컴포넌트의 유효성 스타일 여부를 설정하기 위한 props 입니다.
     */
    isInvalid?: boolean
    /**
     * - 컴포넌트의 포커스 스타일 여부를 설정하기 위한 props 입니다.
     */
    isFocus?: boolean
    /**
     * - 컴포넌트의 style의 width 속성을 설정하기 위한 props 입니다.
     * - width만 변경할 경우에만 사용하시고 추가적인 style 변경은 style props를 사용하여 변경할 수 있습니다.
     */
    length?: string

    children?: React.ReactChild
}
