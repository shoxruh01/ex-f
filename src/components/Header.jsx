import React from "react";
import "./Header.css";
import { FiSearch, FiBell } from "react-icons/fi";
import oka from "../assets/oka.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__qidiruv">
        <FiSearch className="Header__icon" />

        <input
          className="Header__input"
          type="text"
          placeholder="Search desserts..."
        />
      </div>

      <div className="Header__Profil">
        <FiBell className="Header__q" />

        <div className="Header__chiziq"></div>

        <div className="Header__info">
          <h4 className="Header__title">Chef de Cuisine</h4>

          <p className="Header__title2">Executive Pastry Chef</p>
        </div>

        <img src={oka} alt="oka" className="Header__img" />
      </div>
    </div>
  );
};

export default Header;
