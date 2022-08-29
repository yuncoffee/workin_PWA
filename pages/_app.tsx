import Head from "next/head"
import "../styles/_global.scss"
import { AppProps } from "next/app"
import Layout from "../src/components/Layout"
import { RecoilRoot } from "recoil"
import { useEffect, useState } from "react"
import { rgbToHsl } from "../src/utils/DeviceUtils"

export default function MyApp({ Component, pageProps }: AppProps) {
    const [priamryColor, setPrimaryColor] = useState<string>()
    const [customLightColor, setCustomLightColor] = useState("221, 100%, 50%")

    useEffect(() => {
        const root = document.documentElement
        const rootDark = document.querySelector(
            `[data-theme="dark"]`,
        ) as HTMLElement

        const rootStyle = getComputedStyle(root)
        console.log(rootStyle.getPropertyValue("--sy-pri-normal"))
        const darkHue = (
            parseInt(customLightColor.split(",")[2].split("%")[0]) - 10
        )
            .toString()
            .concat("%")

        const darkColor = customLightColor.split(", ")
        darkColor[2] = darkHue
        const darkColorResult = darkColor.join(",")

        root.style.setProperty("--sy-pri-normal", `${customLightColor}`)
        root.style.setProperty("--sy-pri-dark", `${darkColorResult}`)
        rootDark?.style.setProperty("--sy-pri-normal", `${darkColorResult}`)
        rootDark?.style.setProperty("--sy-pri-dark", `${darkColorResult}`)
        const hslPrimaryColor = rootStyle.getPropertyValue("--sy-pri-normal")
        setPrimaryColor(hslPrimaryColor)
    }, [customLightColor])

    return (
        <RecoilRoot>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>warkin-test</title>

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/images/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/images/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="/images/icons/apple-icon.png"
                ></link>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
                <script
                    type="text/javascript"
                    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
                />
                <meta
                    name="theme-color"
                    content={`hsla(${customLightColor}, 1)`}
                />
            </Head>
            <Layout setCustomLightColor={setCustomLightColor}>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    )
}
