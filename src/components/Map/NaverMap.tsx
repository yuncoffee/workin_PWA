import React, { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { reqCurrentAddress } from "../../api/NaverMap"
import {
    rcCurrentAddressAtom,
    rcCurrentLocationAtom,
} from "../../recoil/Common"
import MapInfoContainer from "./MapInfoContainer/MapInfoContainer"
import styles from "./_Map.module.scss"

function NaverMap() {
    const currentLocation = useRecoilValue(rcCurrentLocationAtom)
    let map: any = null
    let marker: any = null
    const [currentAddress, setCurrentAddress] =
        useRecoilState(rcCurrentAddressAtom)
    const [addressData, setAddressData] = useState<any>()
    const [naverMap, setNaverMap] = useState<any>(null)
    const [naverMapMarker, setNaverMapMarker] = useState(null)
    const [naverMapService, setNaverMapService] = useState(null)
    useEffect(() => {
        console.log(currentLocation.coordinate)

        const initMap = () => {
            map = new naver.maps.Map("map", {
                //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
                center: new naver.maps.LatLng(
                    currentLocation.coordinate[0] - 0.0004,
                    currentLocation.coordinate[1],
                ),
                zoom: 18,
            })

            marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(
                    currentLocation.coordinate[0],
                    currentLocation.coordinate[1],
                ),
                map: map,
                icon: {
                    content: `
              <img class="map_fin" alt="marker" src="/images/components/mapfin.svg" />
            `,
                },
            })
            setNaverMap(map)
            setNaverMapMarker(marker)
        }
        initMap()

        if (currentLocation && currentLocation.coordinate.length > 0) {
            reqCurrentAddress(
                currentLocation.coordinate[1],
                currentLocation.coordinate[0],
            )
                .then((res) => setAddressData(res.data.results))
                .catch((e) => console.log(e))
        }
    }, [currentLocation])

    useEffect(() => {
        if (addressData && addressData[0] && addressData[0].region) {
            const area1 = addressData[0].region.area1.name
            const area2 = addressData[0].region.area2.name
            const area3 = addressData[0].region.area3.name
            const area4 = addressData[0].region.area4.name
            const result = area1.concat(area2, " ", area3, " ", area4)

            setCurrentAddress(result)
        }
    }, [addressData])

    const handleMap = () => {
        const _current = new naver.maps.LatLng(
            currentLocation.coordinate[0] - 0.0004,
            currentLocation.coordinate[1],
        )

        if (naverMap) {
            naverMap.setCenter(_current)

            reqCurrentAddress(
                currentLocation.coordinate[1],
                currentLocation.coordinate[0],
            )
                .then((res) => setAddressData(res.data.results))
                .catch((e) => console.log(e))
        }
    }

    return (
        <article className={styles.naverMap}>
            <MapInfoContainer
                currentAddress={currentAddress}
                handleMap={handleMap}
            />
            <div s-divider="line" />
            <div className={styles.canvas} id="map"></div>
        </article>
    )
}

export default NaverMap
