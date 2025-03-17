/* eslint-disable jsx-a11y/no-static-element-interactions */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../ColorContext/darkContext";
import "./Sidebar.scss";
import Anvi from "../../../images/anvi-logo-1.png";

function Sidebar() {
  // color state management using react context
  const { darkMode, dispatch } = useContext(ColorContext);

  return (
    <div className="sidebar">
<<<<<<< Updated upstream
    <div className="logo">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="text_none">anvi</h3>
      </Link>
    </div>
  

=======
      <div className="logo">
        <img
          src={Anvi}
          alt="Anvi Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
>>>>>>> Stashed changes
      <div className="links">
        <ul>
          <p className="spann">Main</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" /> Dashboard
            </li>
          </Link>

          <p className="spann">lists</p>
          <Link to="/feed" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" /> RobotFeed
            </li>
          </Link>

          <Link to="/controll" style={{ textDecoration: "none" }}>
            <li>
              <TableChartIcon className="icon" /> RobotControl
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" /> Speed
          </li>
          <li>
            <CreditCardIcon className="icon" /> LidarData
          </li>
          <li>
            <BarChartIcon className="icon" /> Temperature
          </li>

          <p className="spann">Seetings</p>
          <li>
            <AccountCircleIcon className="icon" /> Profile
          </li>
          <li>
            <SettingsRoundedIcon className="icon" /> Setting
          </li>
          <li>
            <LogoutIcon className="icon" /> Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
