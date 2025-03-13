import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../ColorContext/darkContext";

// Import styles
import "./navbar.scss";

// Import images
import admin from "../../Images/admin_pic.jpg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { darkMode, dispatch } = useContext(ColorContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <div className="navbar_main">
        <div className="menu_logo">
          {toggle ? (
            <CloseIcon
              className="menu_icon"
              fontSize="small"
              onClick={handleToggle}
            />
          ) : (
            <MenuIcon
              className="menu_icon"
              fontSize="small"
              onClick={handleToggle}
            />
          )}

          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="text_none">Dashboard</h3>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon className="search_icon" fontSize="small" />
        </div>

        <div className="item_lists">
          <div className="item item_lan">
            <LanguageIcon className="item_icon" fontSize="small" />
            <p>English</p>
          </div>
          <div className="item">
            {!darkMode ? (
              <DarkModeIcon
                className="item_icon"
                fontSize="small"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            ) : (
              <LightModeIcon
                className="item_icon white"
                fontSize="small"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            )}
          </div>
          <div className="item">
            <FullscreenExitIcon className="item_icon" fontSize="small" />
          </div>

          <div className="item">
            <ChatBubbleOutlineIcon className="item_icon" fontSize="small" />
            <span className="badge">2</span>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="item_icon" fontSize="small" />
            <span className="badge">1</span>
          </div>

          <div className="item">
            <img className="admin_pic" src={admin} alt="admin" />
          </div>
        </div>
      </div>

      <div className="res_navbar">
        {toggle && (
          <div className="res_nav_menu">
            <div className="res_nav_menuu">
              <div className="links">
                <ul>
                  <p className="spann">Main</p>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                      <DashboardIcon className="icon" fontSize="small" />{" "}
                      Dashboard
                    </li>
                  </Link>

                  <p className="spann">Lists</p>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                      <PersonIcon className="icon" fontSize="small" /> Users
                    </li>
                  </Link>

                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <li>
                      <TableChartIcon className="icon" fontSize="small" />{" "}
                      Products
                    </li>
                  </Link>
                  <Link to="/orders" style={{ textDecoration: "none" }}>
                    <li>
                      <CreditCardIcon className="icon" fontSize="small" />{" "}
                      Orders
                    </li>
                  </Link>
                  <li>
                    <CreditCardIcon className="icon" fontSize="small" /> Balance
                  </li>
                  <li>
                    <BarChartIcon className="icon" fontSize="small" /> Status
                  </li>

                  <p className="spann">Settings</p>
                  <li>
                    <AccountCircleIcon className="icon" fontSize="small" />{" "}
                    Profile
                  </li>
                  <li>
                    <SettingsRoundedIcon className="icon" fontSize="small" />{" "}
                    Setting
                  </li>
                  <li>
                    <LogoutIcon className="icon" fontSize="small" /> Log Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
