import Navbar from "./navbar/navbar";
import styles from '@/styles/Home.module.css'
import TabHeader from "./tabHeader";
import Explore from "./tabs/exploreTab";
import Bookshelf from "./tabs/bookshelfTab";
import Account from "./tabs/accountTab";
import { useState } from "react";
import { testData } from '@/firebaseAPI/firebaseAPI'

export default function Feed() {
    let [current, setCurrent] = useState(1);
    
    const page = () => {
        switch (current) {
            case 1:
                return <Explore></Explore>
            case 2:
                return <Bookshelf></Bookshelf>
            case 3: 
                return <Account></Account>
            default:
                return <div></div>
        }
    }
    
    return (
        <div className = {styles.topContainer}>
            <Navbar></Navbar>
            <div className={styles.main}>
                <div className={styles.tabHeaderContainer}>
                    <TabHeader setCurrent = {setCurrent} current = {current}></TabHeader>
                </div>
                <div className={styles.tabContainer}>
                    {page()}
                    <h1>{testData()}</h1>
                </div>
            </div>


        </div>
    )
}