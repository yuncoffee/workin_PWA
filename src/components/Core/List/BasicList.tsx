import { iBasicList } from "../../../models/Components/Core/list"

/**
 * - 리스트형 컴포넌트의 베이스 컴포넌트입니다.
 * - 리스트 아이템과 함께 사용됩니다.
 * @example
 * ```
 *  const ListItem = []
 *
 * <BasicList  className="컴포넌트">
 *      ListItem.map((item, index)=>{
 *          return (
 *              <컴포넌트ListItem
 *                  key={index}
 *                  props...
 *               />
 *          )
 *      })
 * </BasicList>
 * ```
 */
function BasicList({
    children,
    gap = "8px",
    display = "v-box",
    className,
}: iBasicList) {
    return (
        <ul className={className} s-box={display} s-gap={gap}>
            {children}
        </ul>
    )
}

export default BasicList
