import styles from '@/styles/Home.module.css'

export default function Navbar() {


    return (
        <div className={styles.navbar}>
            <div className={styles.logoDiv}>
                <h2>Logo here</h2>
            </div>
            <div className={styles.title}>
                <h1>
                    BookHub
                </h1>
            </div>
            <div className={styles.hamDiv}>
                <h2 className={styles.ham}> Profile and hamburger here</h2>
            </div>

        </div>

    )
}