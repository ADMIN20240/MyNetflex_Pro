import React from "react";
import "../../Components/Headrnetflix/header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownCircle";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <nav className="header_nav-links">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">Latest</a>
          <a href="#">My List</a>
          <a href="#">Browse by Language</a>
        </nav>
        <div className="header_Icons">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li> 
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
