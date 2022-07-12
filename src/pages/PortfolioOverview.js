import React from 'react'
import Card from '../components/Card'
import portfolio from './portfolio.scss'
import DoughnutChartCustome from '../components/DoughnutChartCustome'
import Typography from '@mui/material/Typography';
const style = {
  width: "200px",
  height: "200px"
}

const PortfolioOverview = () => {
  return (
    <div>
      <h4>Diversified Portfolio <span className="count_value">40</span></h4>
      <div className="layout">
        <div className="section_one">
          <h5>Total ESG Score</h5>

          <div className='chart_container'>
            <div className='chart_content'>
              <div style={style} className='chart'>
                <DoughnutChartCustome />
              </div>
              {/* <div className='chartDetails'>
             <div className='score_section'>
              <div className='score_grid-one'></div>
              <div className='score_grid-two'></div>
              <div className='score_grid-three'></div>
             </div>
           </div> */}
            </div>
            <div className='score_content'>
              <div className='score_heading'>
                <h6>ESG Score</h6>
                <small>53.89</small>
              </div>
              <div className='score_values'>
                <div className='score_value-sec'>
                  <div className="score_box score_box-one"></div>
                  <div className="score_box-content">
                    <p>Environmental</p>
                    <small>58.73</small>
                  </div>
                </div>
                <div className='score_value-sec'>
                  <div className=" score_box score_box-two"></div>
                  <div>
                    <p>Social</p>
                    <small>61.23</small>
                  </div>
                </div>
                <div className='score_value-sec'>
                  <div className="score_box score_box-three"></div>
                  <div>
                    <p>Governance</p>
                    <small>37.99</small>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className="section_two">
          <Typography variant="h5" component="h4">
            ESG Rankings
          </Typography>;
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default PortfolioOverview