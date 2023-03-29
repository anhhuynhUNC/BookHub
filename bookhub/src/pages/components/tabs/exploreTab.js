import styles from '@/styles/Home.module.css'
import Book from '../atom/bookAtom'
import Row from '../atom/rowAtom'
import RowContainer from '../atom/RowContainer'
import data from '../../../../public/tempAssets/data'

export default function Explore(){
    console.log(data);

    return (
        <div className={styles.testDiv}>
            <h1> Explore content here </h1>
            <RowContainer data = {data}></RowContainer>
        </div>
    )

}