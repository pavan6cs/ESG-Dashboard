import React from "react";
import { NavLink } from "react-router-dom";
import sidebar from './sidebar.scss'
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Portfolio overview",
    },
    {
      path: "/simulation",
      name: "Simulation",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <img src="/esg-ai-logo.png" className="logo-img" aria-label="logo"></img>
          <h2 className="logo">ESG-MT</h2>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <ArrowForwardIcon color="primary" style={{ float: "right", left:"20vh",top: "85vh",position:"absolute" ,fontSize:"24px"}} />

        <Avatar alt="pavan" src="/pavan.jpg" className="profilePic" />

      </div>

      <main className="mainmenu">{children}</main>

    </div>
  );
};

export default Sidebar;
