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
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    )
}
