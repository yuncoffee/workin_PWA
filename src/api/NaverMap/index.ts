import axios from "axios"

export const reqCurrentAddress = (longitude: number, latitude: number) => {
    const path = `naver/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${longitude},${latitude}&sourcecrs=epsg:4326&output=json&orders=addr`

    const headers = {
        headers: {
            "X-NCP-APIGW-API-KEY-ID": `${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`,
            "X-NCP-APIGW-API-KEY": `${process.env.NEXT_PUBLIC_MAP_CLIENT_SECRET}`,
        },
    }

    return axios.get(path, headers)
}
