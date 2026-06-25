import React, { useState } from "react";
import "./Sidebar.css";

import {
  FiGrid,
  FiShoppingBag,
  FiMenu,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

const Sidebar = () => {
  const [open, ochish] = useState(true);

  return (
    <div className={open ? "sidebar" : "sidebar close"}>
      <div>
        <h2 className="logo">The Gallery</h2>

        <p className="subtitle">
          EDITORIAL
          <br />
          DASHBOARD
        </p>

        <ul className="menu">
          <li className="active">
            <FiGrid className="menuIcon" onClick={() => ochish(!open)} />
            <span>Dashboard</span>
          </li>

          <li>
            <FiShoppingBag />
            <span>Orders</span>
          </li>

          <li>
            <FiMenu />
            <span>Menu</span>
          </li>

          <li>
            <FiUsers />
            <span>Customers</span>
          </li>

          <li>
            <FiBarChart2 />
            <span>Analytics</span>
          </li>

          <li>
            <FiSettings />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div>
        <button className="btn">New Order</button>

        <div className="help">
          <FiHelpCircle />
          <span>Help Center</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




