import Head from "next/head"
import { useEffect } from "react"
import GlobalNav from "../src/components/Nav/GlobalNav"
import NaverMap from "../src/components/NaverMap"
import styles from "../styles/Home.module.css"

export default function Home() {
    useEffect(() => {
        console.log("test")
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
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>test</h1>
                    <h2>PWA Test2</h2>
                    <h3>{process.env.NEXT_PUBLIC_MAP_CLIENT_ID}</h3>
                    <h3>sss</h3>
                    <NaverMap />
                    <p className={styles.description}>
                        Get started by editing{" "}
                        <code className={styles.code}>pages/index.js</code>
                    </p>

                    <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h3>Documentation &rarr;</h3>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className={styles.card}
                        >
                            <h3>Learn &rarr;</h3>
                            <p>
                                Learn about Next.js in an interactive course
                                with quizzes!
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
                                Instantly deploy your Next.js site to a public
                                URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}
