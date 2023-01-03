import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import "./RightSide.css"
function RightSide() {
  return (
      <div className="RightSide">
          <div className="">
              <h3>Update</h3>
              <Updates />
          </div>
          <div className="">
              <h3>Customer Review</h3>
              <CustomerReview />
          </div>
      </div>
  )
}

export default RightSide