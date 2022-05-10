import styles from '/styles/Box.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

const Store = () => {
    const router = useRouter()
    return <div className={styles.box}>
        Dynamic Routes <br></br>{router.query.id}
        <div >
            <Link href='/'>
            <a >HOME</a>
            </Link>
            <br></br>
            <Link href='/store/dynamic-route'>
            <a >GO TO DYNAMIC PAGE</a>
            </Link>
        
        </div>
       
    </div>
}
export default Store