import React from "react";
import card from './card.scss'

const Card = () => {
  return (
    <>
      <div className="card_section">
        <div className="card_section--one">
         <h2>ExxonMobil</h2>
        </div>
        <div className="card_section--two">
            <div className="card_heading">
                <small>12 mins ago</small>
            </div>
        <div className="card_description">
        <h3>Change the Exxon Mobil Stock Strategy to 
            Suit the New...
        </h3>
        </div>
        <div className="card_footer">
            <span>Nasdaq</span>
            <span>Stock Loss</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Card;
