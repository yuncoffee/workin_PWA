import { iMapInfoContainer } from "../../../models/Map"
import IconButton from "../../Core/Button/IconButton"
import styles from "../_Map.module.scss"

function MapInfoContainer({ currentAddress, handleMap }: iMapInfoContainer) {
    return (
        <article className={styles.mapInfoContainer}>
            <h6>{currentAddress}</h6>
            <IconButton
                iconName="ri-focus-3-fill"
                size="sm"
                variant="text"
                onClick={handleMap}
            />
        </article>
    )
}

export default MapInfoContainer
