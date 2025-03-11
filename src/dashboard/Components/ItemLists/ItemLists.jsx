import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React from "react";
import { Link } from "react-router-dom";
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
          <PermIdentityIcon
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
          <LocalGroceryStoreOutlinedIcon
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
          <AttachMoneyOutlinedIcon
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
        title: "Lidar",
        isMoney: false,
        count: 444,
        icon: (
          <PaidOutlinedIcon
            style={{ color: "#AC7088", backgroundColor: "#B1B2FF" }}
            className="icon"
          />
        ),
        link: "See Lidar Data",
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
        <span className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </span>
      </div>

      <div className="counts">
        {data.isMoney && <AttachMoneyOutlinedIcon />}
        {data.count}
      </div>

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
