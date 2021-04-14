import React, { useState } from "react";
import logo from "./kite.jpg";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <article className="login">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username" />
            <input
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <form>
            <div className="form" className="form-control">
              <label htmlFor="password" />
              <input
                placeholder="Password"
                type="text"
                id="password"
                name="password"
              />
            </div>
          </form>
          <Link to="/dashboard" className="btn">
            Login
          </Link>
        </form>
      </article>
    </>
  );
};

export default Login;
