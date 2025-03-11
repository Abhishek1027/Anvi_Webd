import React from "react";
import ItemLists from "../ItemLists/ItemLists";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TableList from "../TableList/TableList";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      {/* Sidebar */}
      <div className="home_sidebar">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="home_main">
        <Navbar />
        <div className="bg_color" />

        {/* Item Lists */}
        <div className="home_items">
          <ItemLists type="user" />
          <ItemLists type="orders" />
          <ItemLists type="products" />
          <ItemLists type="balance" />
        </div>

        {/* Table Section */}
        <div className="table">
          <div className="title">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Home;
