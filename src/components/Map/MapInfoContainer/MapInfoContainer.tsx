import { iMapInfoContainer } from "../../../models/Map"
import styles from "../_Map.module.scss"

function MapInfoContainer({ currentAddress, handleMap }: iMapInfoContainer) {
    return (
        <article className={styles.mapInfoContainer}>
            <h6>{currentAddress}</h6>
            <button
                onClick={() => {
                    handleMap()
                }}
            >
                +
            </button>
        </article>
    )
}

export default MapInfoContainer
