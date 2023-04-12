import { default_fetch } from "@/utils/bookmatch";
import { useState, useEffect } from "react";
import RowContainer from "../atom/RowContainer";
import styles from '@/styles/Home.module.css'

export default function Explore_default(props) {
    
    return (
        <>
            {props.data.map((val, i) => {
                return <div className={styles.rowContainer}>
                    <h3>{val.attr == undefined ? "" : val.attr}</h3>
                    <RowContainer data={val.data} key={i}></RowContainer>
                </div>
            })}
        </>
    )

}