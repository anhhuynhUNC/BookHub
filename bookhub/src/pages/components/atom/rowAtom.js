import Book from "./bookAtom"
import styles from '@/styles/Home.module.css'

export default function Row(props) {


    return (
        props.data.map((data, i) => {
            return <Book name={data.name} coverId={data.coverId} key={i}></Book>
        })
    )

}