import React, { useState } from "react";
import image from "./assets/yutube.png";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <i class="fas fa-bars"></i>
        <Link to="/">
          <img src={image} className="header__logo" alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          value={inputSearch}
          placeholder="Serch"
        />
        <Link to={`/search/${inputSearch}`}>
          <i class="fas fa-search"></i>
        </Link>
      </div>
      <div className="header__icons">
        <i class="fas fa-video"></i>
        <i class="fas fa-browser"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-user-tie"></i>
      </div>
    </div>
  );
}

export default Header;
