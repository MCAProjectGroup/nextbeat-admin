import React from 'react'
import { CardDataArray } from '../../Data/Data'
import Card from '../Card/Card'
import "./Cards.css"
const Cards = () => {
  return (
      <div className="Cards">
          {CardDataArray.map((card, index)=>(
              <div className="parentContainer">
                  <Card 
                    title={card.title}
                    color={card.color}
                    barValue={card.barVal}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                  />
              </div>
          ))}
      </div>
  )
}

export default Cards