import React from 'react'
import Cards from '../Cards/Cards'
import TableComp from '../TableComp/TableComp'
import "./MainDash.css"
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <TableComp />
    </div>
  )
}

export default MainDash