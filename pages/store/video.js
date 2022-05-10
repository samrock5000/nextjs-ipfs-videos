import useSWR from 'swr';
import styles from '../../styles/Video.module.css'
import tracks from '../api/videos'
import React, { useState } from 'react';
import Link from 'next/link';

function Video () {
    const [count, setCount] = useState(1);
    const [currTrack, setTrack] = useState(tracks.tracks.video1);
    
    function handleNext(){       
        setCount(count += 1)
        let nextTrack = tracks.tracks[`video${count}`]
        if (count>4) {
            nextTrack = tracks.tracks[`video${1}`]
            setTrack(nextTrack)
            setCount(count -= 4)           
           
        } 
        setTrack(nextTrack)
       
        return nextTrack
    }

    const { data, error } = useSWR(currTrack, fetch)
    // console.log(data)
    if(error) return <div className={styles.section}>Failed to Load</div>
    if(!data) return <div className={styles.section}>Loading...</div>
      
    return (
        <div className={styles.section}>        
            <section >
            <video
                 autoPlay={true}
                 className={styles.video}
                 controls 
                 src={data.url}>

            </video>
            <button onClick={()=>handleNext()} className={styles.button}>Next</button>
          
        </section>
          <Link href='/'>
            <a className={styles.a} >HOME</a>
            </Link>
        </div>
      
    )
}
export default Video;