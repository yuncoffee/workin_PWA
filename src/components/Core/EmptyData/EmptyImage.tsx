import Image from "next/image"
// import mainLogo from "../../../../public/images/mainLogo/mainCloudStudio.png"
import { iEmptyImage } from "../../../models/Components/Core/emptyData"

function EmptyImage({ children, fill, className, style }: iEmptyImage) {
    return (
        <div
            className={className}
            style={style}
            s-padding="8px"
            s-radius="4px"
            s-box={fill && "v-box"}
            s-align={fill && "center"}
            s-justify={fill && "center"}
            s-height={fill && "100%"}
        >
            <figure
                className="noData-img"
                s-box="h-box"
                s-align="center"
                s-justify="center"
                style={{
                    opacity: "0.05",
                    filter: "grayscale(100%)",
                }}
            >
                <Image src={""} alt="main logo" />
            </figure>
            {children}
        </div>
    )
}

export default EmptyImage
