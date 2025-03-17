import React from "react";
import { Link } from "react-router-dom";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined"; // Temperature
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined"; // Battery
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined"; // Speed
import RadarOutlinedIcon from "@mui/icons-material/Radar"; // LiDAR
import "./itemlists.scss";

function ItemLists({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Temperature",
        isMoney: false,
        count: 232,
        icon: (
          <DeviceThermostatOutlinedIcon
            style={{ color: "#FF74B1", backgroundColor: "#FFD6EC" }}
            className="icon"
          />
        ),
        link: "See Temperature",
        linkto: "/temperature",
      };
      break;

    case "orders":
      data = {
        title: "Battery",
        isMoney: false,
        count: 34,
        icon: (
          <BatteryChargingFullOutlinedIcon
            style={{ color: "#AC7088", backgroundColor: "#FFF38C" }}
            className="icon"
          />
        ),
        link: "View Battery Status",
        linkto: "/battery",
      };
      break;

    case "products":
      data = {
        title: "Speed",
        isMoney: false,
        count: 107,
        icon: (
          <SpeedOutlinedIcon
            style={{ color: "#367E18", backgroundColor: "#A7FFE4" }}
            className="icon"
          />
        ),
        link: "See Speed Data",
        linkto: "/speed",
      };
      break;

    case "balance":
      data = {
        title: "LiDAR",
        isMoney: false,
        count: 444,
        icon: (
          <RadarOutlinedIcon
            style={{ color: "#AC7088", backgroundColor: "#B1B2FF" }}
            className="icon"
          />
        ),
        link: "See LiDAR Data",
        linkto: "/lidar",
      };
      break;

    default:
      data = {};
  }

  return (
    <div className="item_listss">
      <div className="name">
        <p>{data.title}</p>
      </div>

      <div className="counts">{data.count}</div>

      <div className="see_item">
        <Link to={data.linkto}>
          <p>{data.link}</p>
        </Link>
        {data.icon}
      </div>
    </div>
  );
}

export default ItemLists;
