import { useRecoilValue } from "recoil"
import { rcDeviceAtom } from "../src/recoil/Common"
import LinkButton from "../src/components/Core/Button/LinkButton"
import styles from "../src/components/Pages/Home/_home.module.scss"

export default function Home() {
    const deviceAtom = useRecoilValue(rcDeviceAtom)

    return (
        <main className={styles.main} data-device={deviceAtom.device}>
            <LinkButton
                buttonType="button"
                href="/home"
                buttonName="to Home!"
            />
        </main>
    )
}
