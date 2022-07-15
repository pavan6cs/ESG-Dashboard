import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import portfolio from './portfolio.scss'
import DoughnutChartCustome from '../components/DoughnutChartCustome'
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Drawer from '@mui/material/Drawer';
import CustomeDrawer from '../components/CustomeDrawer';
import CustomeBarChart from '../components/CustomeBarChart'



const PortfolioOverview = () => {
  const [scores, setScores] = useState([]);
  const [totalScore, setTotalScore] = useState({ total: 0, E: 0, S: 0, G: 0 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerIndex, setDrawerIndex] = useState(0);
  const dowJhones = [65, 72, 63, 60]
  const toggleDrawer = (index) => {
    console.log(index)
    setDrawerIndex(index);
    setDrawerOpen(!drawerOpen);

  }

  useEffect(() => {
    let esg = [];
    const apiUrl = 'http://localhost:4000/esgScores';
    axios.get(apiUrl).then((repos) => {
      const scores = repos.data;
      let ts = 0;
      let E = 0;
      let S = 0;
      let G = 0;
      let i = 0;
      let total = scores.map((data) => {

        data.E = data.E + getRandomArbitrary(-50, 50)
        data.S = data.S + getRandomArbitrary(-50, 50)
        data.G = data.G + getRandomArbitrary(-50, 50)
        data.total = (data.E + data.S + data.G) / 3;
        data.id = ++i;
        data.influence = getRandomArbitrary(-1, 1);
        data.holding = (100 * data.influence) / 10;
        E = E + data.E;
        S = S + data.S;
        G = G + data.G;
        return data;
      });
      let object = {
        total: ((E / scores.length) + (S / scores.length) + (G / scores.length)) / 3,
        E: E / scores.length,
        S: S / scores.length,
        G: G / scores.length
      }
      setTotalScore(object);
      //console.log(total);
      setScores(total);
    });
  }, [setScores]);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const getCardlist = () => {
    let cardList = scores.map((item, index) => {
      return <Card data={item} key={item.id} togle={toggleDrawer} />
    });
    return cardList;
  }

  return (
    <div>
      <h4>Diversified Portfolio <span className="count_value">{scores.length}</span></h4>
      <div className="layout">
        <div className="section_one">
          <Typography variant="h5" component="h5">
            Total ESG Score
          </Typography>

          <div className='chart_container'>
            <div className='chart_content'>

              <DoughnutChartCustome data={(totalScore.total.toFixed(2) / 3).toFixed(2)} marginTop="2rem" marginLeft="2rem" width="200px" height="200px" />

            </div>
            <div className='score_content'>
              <div className='score_heading'>
                <h6>ESG Score</h6>
                <small>{totalScore.total.toFixed(2)}</small>
              </div>
              <div className='score_values'>
                <div className='score_value-sec'>
                  <div className="score_box score_box-one"></div>
                  <div className="score_box-content">
                    <p>Environmental</p>
                    <small>{totalScore.E.toFixed(2)}</small>
                  </div>
                </div>
                <div className='score_value-sec'>
                  <div className=" score_box score_box-two"></div>
                  <div>
                    <p>Social</p>
                    <small>{totalScore.S.toFixed(2)}</small>
                  </div>
                </div>
                <div className='score_value-sec'>
                  <div className="score_box score_box-three"></div>
                  <div>
                    <p>Governance</p>
                    <small>{totalScore.G.toFixed(2)}</small>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <hr style={{ marginTop: "1rem", marginBottom: "0.5rem" }}></hr>
          <Typography variant="h5" component="h4">
            BenchMark Comparision
          </Typography>

          <div className="barChart">
            <CustomeBarChart dataSet1={dowJhones}
              dataSet2={[Math.random(totalScore.total), Math.random(totalScore.E), Math.random(totalScore.S), Math.random(totalScore.G)]} />
          </div>

        </div>
        <div className="section_two">
          <Typography variant="h5" component="h4">
            ESG Rankings
          </Typography>
          {
            getCardlist()
          }

        </div>
      </div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        elevation={2}
      >
        <div className="drawerContent">
          <CustomeDrawer data={scores} index={drawerIndex} togle={toggleDrawer} />
        </div>
      </Drawer>
    </div>
  )
}

export default PortfolioOverview