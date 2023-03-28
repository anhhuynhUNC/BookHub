import styles from '@/styles/Home.module.css'

export default function TabHeader(props) {


    return (
        <ul className={styles.tabheader}>
            <li className={props.current == 1 ? styles.active : styles.inactive} onClick={() => { props.setCurrent(1) }}>
                <div>Explore</div>
            </li>
            <li className={props.current == 2 ? styles.active : styles.inactive} onClick={() => { props.setCurrent(2) }}>
                <div>My Bookshelves</div>
            </li>
            <li className={props.current == 3 ? styles.active : styles.inactive} onClick={() => { props.setCurrent(3) }}>
                <div>My Account</div>
            </li>
        </ul>
    )
}