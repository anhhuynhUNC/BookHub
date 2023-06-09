import Book from "./bookAtom"
import styles from '@/styles/Home.module.css'

export default function Row(props) {
    if (props.data == undefined) return;

    return (
        props.data.map((data, i) => {
            let volumeInfo = data.volumeInfo;
            let name = volumeInfo.title;
            let description = volumeInfo.description
            let coverId = volumeInfo.imageLinks.thumbnail;
            let authors = volumeInfo.authors;
            return <Book description={description} name={name} coverId={coverId} key={i} authors = {authors}></Book>
        })
    )

}