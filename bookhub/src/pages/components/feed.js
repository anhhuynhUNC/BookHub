import Navbar from "./navbar/navbar";
import styles from '@/styles/Home.module.css'
import TabHeader from "./tabHeader";
import Explore from "./tabs/exploreTab";
import Bookshelf from "./tabs/bookshelfTab";
import Account from "./tabs/accountTab";
import { useState, useEffect } from "react";
import { getBook, testData } from '@/firebaseAPI/firebaseAPI'
import { default_fetch } from "@/utils/bookmatch";

export default function Feed() {
    let [current, setCurrent] = useState(1);
    let [default_data, setDefaultData] = useState([]);
    //if not logged in just do top 5 genre

    //use effect load current selection of books
    useEffect(() => {
        default_fetch(setDefaultData);
    }, [])

    const page = () => {
        switch (current) {
            case 1:
                return <Explore default_data={default_data}></Explore>
            case 2:
                return <Bookshelf></Bookshelf>
            case 3:
                return <Account></Account>
            default:
                return <div></div>
        }
    }

    return (
        <div className={styles.topContainer}>
            <Navbar></Navbar>
            <div className={styles.main}>
                <div className={styles.tabHeaderContainer}>
                    <TabHeader setCurrent={setCurrent} current={current}></TabHeader>
                </div>
                <div className={styles.tabContainer}>
                    {page()}
                </div>
            </div>


        </div>
    )
}