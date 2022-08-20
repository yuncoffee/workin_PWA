import { tBadgeStyle, tUiColor } from "../common"
import { iElements } from "../elements"

interface iBadge extends iElements {
    contents: string | number
    variant?: tBadgeStyle
    color?: tUiColor
}

interface iTag extends iBadge {}
