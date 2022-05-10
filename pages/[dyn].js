import styles from '/styles/Box.module.css'
import { useRouter } from "next/router"

const HomeDyna = () =>{
    const router = useRouter();
    const q = router.query.dyn;
  
    return <div className={styles.box}>Are you Lost? Dynamic Route: {q}</div>

    
}
export default HomeDyna