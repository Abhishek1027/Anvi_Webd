import DashboardApp from "./DashboardApp"; // Ensure this file exists
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardAuth = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate, authToken]);

  return authToken ? <DashboardApp /> : null;
};

export default DashboardAuth;
