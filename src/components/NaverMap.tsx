import React, { useEffect } from "react"

function NaverMap() {
    useEffect(() => {
        let map = null
        let marker = null
        const initMap = () => {
            map = new naver.maps.Map("map", {
                //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
                center: new naver.maps.LatLng(37, 127.039573),
                zoom: 13,
            })

            marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
                map: map,
                icon: {
                    content: `
              <img alt="marker" src={vectorIcon} /> //마커에 사용할 이미지
            `,
                },
            })
        }
        initMap()
    }, [])

    return (
        <article style={{ width: "100vw", height: "100vh" }}>
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </article>
    )
}

export default NaverMap
