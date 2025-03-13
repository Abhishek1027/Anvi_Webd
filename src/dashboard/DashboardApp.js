import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar"; // ✅ Correct Path
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import AddNew from "./Pages/AddNew/AddNew";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Blogs from "./Pages/Blogs/Blogs";
import Detail from "./Pages/Detail/Detail";
import Lists from "./Pages/UserLists/UserLists";
import "./app.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* ✅ Sidebar only appears once here */}
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Lists type="user" />} />
          <Route path="/user/:userId" element={<Detail />} />
          <Route path="/products" element={<Lists type="product" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetail />} />
          <Route path="/addnew" element={<AddNew />} />

          {/* ✅ Redirect unknown dashboard routes to Home inside dashboard */}
          <Route path="*" element={<Navigate to="." />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
