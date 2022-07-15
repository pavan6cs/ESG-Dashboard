import React from "react";
import { NavLink } from "react-router-dom";
import sidebar from './sidebar.scss'

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Portfolio overview",
    },
    {
      path: "/report",
      name: "Report",
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
      </div>
      <main className="mainmenu">{children}</main>
    </div>
  );
};

export default Sidebar;
