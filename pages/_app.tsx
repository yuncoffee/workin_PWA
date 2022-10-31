import { RecoilRoot } from "recoil"
import Head from "next/head"
import { AppProps } from "next/app"
import Layout from "../src/components/Layout"
import "../styles/_global.scss"

export default function MyApp({ Component, pageProps }: AppProps) {
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
                    href="/images/ios/16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/images/ios/32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="/images/splash_screens/icon.png"
                ></link>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
                <link rel="favicon" href="/favicon.ico"></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/12.9__iPad_Pro_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/10.9__iPad_Air_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/10.5__iPad_Air_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/10.2__iPad_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_14_Pro_Max_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_14_Pro_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_11__iPhone_XR_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    href="/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/12.9__iPad_Pro_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/10.9__iPad_Air_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/10.5__iPad_Air_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/10.2__iPad_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_14_Pro_Max_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_14_Pro_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_11__iPhone_XR_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
                ></link>
                <link
                    rel="apple-touch-startup-image"
                    media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    href="/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
                ></link>
                <script
                    type="text/javascript"
                    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    )
}
