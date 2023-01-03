import React from 'react'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RightSide/RightSide'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from "./DashBoard.module.css"
function DashBoard() {
    return (
            <div className={styles.container}>
                <MainDash />
                <RightSide />
            </div>
          
    )
}

export default DashBoard