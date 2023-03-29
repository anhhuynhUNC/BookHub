import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { getImage } from './atomUtil'

export default function  Book(props){
    const source = getImage(props.coverId)

    return (
        <div className={styles.bookContainer}>
            <Image className={styles.img} src={source} width={70} height={100} alt="cover"></Image>
            <br></br>
            {props.name}    
        </div>
        
    )
}