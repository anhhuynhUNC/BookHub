import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { getImage } from '../../../utils/atomUtil'
import HoverAtom from './HoverAtom'
import { useState, useRef } from 'react'

export default function Book(props) {
    const source = props.coverId
    let [hover, setHover] = useState(false);
    let [metrics, setMetrics] = useState({});
    let infoStyle = {};

    // input ref of each book containee
    const inputRef = useRef();

    function hoverOn() {
        setHover(true);

        //retrieve div offset and construct style offset for hover info
        setMetrics(inputRef.current.getBoundingClientRect());

        console.log(metrics);

    }
    function hoverOff() {
        setHover(false);
    }

    return (
        <div ref={inputRef} className={styles.bookContainer} onMouseEnter={() => { hoverOn() }} onMouseLeave={() => { hoverOff() }}>
            <Image className={styles.img} src={source} alt="cover" fill quality={100}></Image>
            {hover ? <HoverAtom style={{ top: `${metrics.top + metrics.height / 2}px`, left: `${metrics.left + metrics.width / 2}px`}} description={props.description} name={props.name} authors = {props.authors}></HoverAtom> : <></>}
        </div>

    )
}