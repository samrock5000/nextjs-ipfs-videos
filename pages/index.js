import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Box from './store/box'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>  
        <title>Music Videos</title>
           
      </Head>
      <Box/>
      <section className={styles.section}>
      <Link href='/store/video'>
            <button className={styles.button}>
            <a >Watch Sam Play Guitar</a>
            </button>         
            </Link>
           
      </section>
      

   
   
    </div>
  )
}
