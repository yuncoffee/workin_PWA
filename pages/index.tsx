import Head from "next/head"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import NaverMap from "../src/components/Map/NaverMap"
import CheckContainer from "../src/components/Pages/Home/CheckContainer/CheckContainer"
import NoticeContainer from "../src/components/Pages/Home/NoticeContainer/NoticeContainer"
import WorkDetailContainer from "../src/components/Pages/Home/WorkDetailContainer/WorkDetailContainer"
import styles from "../src/components/Pages/Home/_Home.module.scss"
import { rcCurrentLocationAtom, rcDeviceAtom } from "../src/recoil/Common"

export default function Home() {
    const deviceAtom = useRecoilValue(rcDeviceAtom)
    const [currentLocation, setCurrentLocation] = useRecoilState(
        rcCurrentLocationAtom,
    )

    useEffect(() => {
        if (navigator.geolocation) {
            console.log("yes!")
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)

                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                setCurrentLocation({
                    ...currentLocation,
                    coordinate: [latitude, longitude],
                })
            })
        } else {
            alert("위치정보 사용불가")
        }
        console.log(process.env.NEXT_PUBLIC_MAP_CLIENT_ID)
    }, [])

    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
                />
            </Head>

            <main className={styles.main} data-device={deviceAtom.device}>
                <NoticeContainer />
                <div s-divider="line" />
                <NaverMap />
                <CheckContainer />
                <WorkDetailContainer />
                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
