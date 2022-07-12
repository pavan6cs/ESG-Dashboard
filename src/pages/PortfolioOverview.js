import React from 'react'
import Card from '../components/Card'


const PortfolioOverview = () => {
  return (
    <div>
    <h1>PortfolioOverview</h1>
    <div className="layout">
      <div className="section_one">
        <h1>Section1</h1>
      </div>
      <div className="section_two">
        <h1>Section2</h1>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
  )
}

export default PortfolioOverview