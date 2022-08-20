import { iEmptyText } from "../../../models/Components/Core/emptyData"

/**
 * - 데이터가 없을 경우 안내를 위해 사용되는 컴포넌트입니다.
 * @example
 * ```
 *  const data = []
 *
 *  {data.length > 0 ?
 *  (
 *      <UI컴포넌트 data={data} />
 * ) : (
 *      <EmptyText message={"데이터가 없습니다."} />
 * )}
 *
 * ```
 */
function EmptyText({ className, message, fill, style }: iEmptyText) {
    const messages = message.split("<br/>")

    return (
        <div
            className={className}
            s-line="sy-gray-04"
            s-padding="8px"
            s-radius="4px"
            s-box={fill && "h-box"}
            s-align={fill && "center"}
            s-justify={fill && "center"}
            s-height={fill && "100%"}
            style={style}
        >
            <h5 s-box="v-box" s-text-align="center">
                <span>{messages[0]}</span>
                {messages
                    .filter((message, index) => index > 0)
                    .map((message, index) => {
                        return <span key={index}>{message}</span>
                    })}
            </h5>
        </div>
    )
}

export default EmptyText
