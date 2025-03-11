import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AnviLogo from "../images/anvi-logo-1.png";

const Login = () => {
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login check (Replace with actual API request)
    if (
      customerId === "12345" &&
      name === "Avanika" &&
      password === "password"
    ) {
      // Store authentication token and user details in localStorage
      const userData = { customerId, name };
      localStorage.setItem("authToken", "your_jwt_token");
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Login Successful!");
      navigate("/dashboard"); // Securely redirect to Dashboard
    } else {
      setError("Invalid Customer ID, Name, or Password.");
    }
  };

  return (
    <div className="login-container">
      <img src={AnviLogo} alt="Anvi Logo" />
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
