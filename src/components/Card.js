import React, { useState } from "react";
import card from './card.scss'
import DoughnutChartCustome from '../components/DoughnutChartCustome'
import Typography from '@mui/material/Typography';


const Card = (props) => {


  function toTitleCase(str) {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  const handleClick = (val) => {
    props.togle(val);
  }

  return (
    <>
      <div className="card_section" onClick={() => handleClick(props.data.id)}>
        <div className="card_section--one">
          <Typography variant="h5" component="h5">
            {toTitleCase(props.data.name)}
          </Typography>

          <div className="chart_sec">
            <div className="chart_img">
              <DoughnutChartCustome data={props.data.total.toFixed(2)} width="80px" height="80px" marginTop="2rem" marginLeft="2rem" />
            </div>
            <div className="chart_value">
              <p>Influence <span className="influence_value">{props.data.influence.toFixed(2)}</span></p>
              <p>Holdings: <span className="holding_value">{Math.round(Math.abs(props.data.holding))}%</span></p>
            </div>
          </div>
        </div>
        <div className="card_section--two">
          <div className="card_heading">
            <small>{props.data.time}</small>
          </div>
          <div className="card_description">
            <h3>{props.data.news}
            </h3>
          </div>
          <div className="card_footer">
            <span>Nasdaq</span>
            <span className="stock_loss">Stock Loss</span>
          </div>
        </div>
      </div>


    </>
  );
};

export default Card;
