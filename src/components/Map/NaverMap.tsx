import axios from "axios"
import React, { useEffect, useState } from "react"

import { useRecoilValue } from "recoil"
import { rcCurrentLocationAtom } from "../../recoil/Common"
import styles from "./_Map.module.scss"

function NaverMap() {
    const currentLocation = useRecoilValue(rcCurrentLocationAtom)
    let map: any = null
    let marker: any = null
    const [currentAddress, setCurrentAddress] = useState("주소가 없어요")
    const [addressData, setAddressData] = useState<any>()
    const [naverMap, setNaverMap] = useState<any>(null)
    const [naverMapMarker, setNaverMapMarker] = useState(null)
    const [naverMapService, setNaverMapService] = useState(null)
    // useEffect(() => {
    //     const initMap = () => {
    //         map = new naver.maps.Map("map", {
    //             //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
    //             center: new naver.maps.LatLng(37.5666805, 126.9784147),
    //             zoom: 19,
    //         })

    //         marker = new naver.maps.Marker({
    //             position: new naver.maps.LatLng(37.5666805, 126.9784147),
    //             map: map,
    //             icon: {
    //                 content: `
    //           <img class="map_fin" alt="marker" src="/images/components/mapfin.svg" />
    //         `,
    //             },
    //         })
    //         setNaverMap(map)
    //         setNaverMapMarker(marker)
    //     }
    //     initMap()
    // }, [])

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_MAP_CLIENT_SECRET)
    }, [])

    const reqLoaction = () => {
        axios
            .get(
                // `https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${currentLocation.coordinate[0]},${currentLocation.coordinate[1]}&sourcecrs=epsg:4326&output=json&orders=addr,admcode,roadaddr`,
                `https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${currentLocation.coordinate[1]},${currentLocation.coordinate[0]}&sourcecrs=epsg:4326&output=json&orders=addr`,
                {
                    headers: {
                        "X-NCP-APIGW-API-KEY-ID": `${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`,
                        "X-NCP-APIGW-API-KEY": `${process.env.NEXT_PUBLIC_MAP_CLIENT_SECRET}`,
                    },
                    // timeout: 3000, // 1초 이내에 응답이 오지 않으면 에러로 간주
                },
            )
            .then((res) => {
                setAddressData(res.data.results)
            })
            .catch((e) => {
                console.log(e)
            })
    }

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

    useEffect(() => {
        const initMap = () => {
            map = new naver.maps.Map("map", {
                //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
                center: new naver.maps.LatLng(
                    currentLocation.coordinate[0],
                    currentLocation.coordinate[1],
                ),
                zoom: 19,
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
    }, [currentLocation])

    const handleMap = () => {
        const _current = new naver.maps.LatLng(
            currentLocation.coordinate[0],
            currentLocation.coordinate[1],
        )
        console.log(_current)
        if (naverMap) {
            naverMap.setCenter(_current)
            // marker.setPosition(_current)

            console.log(window.naver.maps.Service)
            console.log(
                currentLocation.coordinate[0],
                currentLocation.coordinate[1],
            )
            reqLoaction()
        }
    }

    return (
        <article className={styles.naverMap}>
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    left: "48px",
                    zIndex: "10",
                }}
            >
                <button
                    onClick={(event) => {
                        event.preventDefault()
                        handleMap()
                    }}
                >
                    test
                </button>
                <h5>{currentAddress}</h5>
            </div>
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </article>
    )
}

export default NaverMap
