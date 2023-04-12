import styles from '@/styles/Home.module.css'
import Book from '../atom/bookAtom'
import Row from '../atom/rowAtom'
import RowContainer from '../atom/RowContainer'
import { data, genre } from '../../../../public/tempAssets/data'
import { useEffect, useState } from 'react'
import { getBook } from '@/firebaseAPI/firebaseAPI'
import Explore_default from '../exploreTabContainer/explore_default'

export default function Explore(props) {
    return (

        <Explore_default data={props.default_data}></Explore_default>

    )

}