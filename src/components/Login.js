import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AnviLogo from "../images/anvi-logo-1.png";

const Login = () => {
  const [isDeveloperLogin, setIsDeveloperLogin] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDeveloperLogin) {
      if (
        name === "Avanika" &&
        email === "dev@example.com" &&
        password === "password"
      ) {
        alert("Developer Login Successful!");
        navigate("/dashboard");
      } else {
        setError("Invalid Name, Email, or Password.");
      }
    } else {
      if (customerId === "12345" && password === "password") {
        alert("User Login Successful!");
        navigate("/dashboard");
      } else {
        setError("Invalid Customer ID or Password.");
      }
    }
  };

  return (
    <div className="login-container">
      <img src={AnviLogo} alt="Anvi Logo" />
      <h2>{isDeveloperLogin ? "Developer Login" : "User Login"}</h2>

      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        {!isDeveloperLogin ? (
          <>
            <input
              type="text"
              placeholder="Customer ID"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button type="submit">Login</button>
      </form>

      <p
        className="switch-login"
        onClick={() => setIsDeveloperLogin(!isDeveloperLogin)}
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        {isDeveloperLogin ? "Back to User Login" : "Anvi Login?"}
      </p>
    </div>
  );
};

export default Login;
