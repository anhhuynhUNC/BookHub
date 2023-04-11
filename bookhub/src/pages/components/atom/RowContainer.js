import Row from "./rowAtom"
import styles from '@/styles/Home.module.css'
import { getRowList } from "../../../utils/atomUtil"
import { useState } from "react"

export default function RowContainer(props) {
    let [car, setCar] = useState(0);
    let data = getRowList(props.data);
    let [hasReachEnd, setHasReachEnd] = useState(false);

    function handleRight() {
        if (car == data.length - 1) {
            setCar(0);
            setHasReachEnd(true);
        } else {
            setCar(car + 1);
        }
    }

    function handleLeft() {
        if (car == 0) {
            setCar(data.length - 1);
        } else {
            setCar(car - 1);
        }
    }

    function showInBeginning(){
        if(car == 0 && hasReachEnd){
            return true;
        }
        if (car == 0 && !hasReachEnd){
            return false;
        }
        return true;
    }

    return (
        <div className={styles.rowContainer}>
            {showInBeginning() ? <button onClick={handleLeft}>prev</button> : <></>}
            <Row data={data[car]}></Row>
            <button onClick={handleRight}>next</button>
        </div>
    )
}