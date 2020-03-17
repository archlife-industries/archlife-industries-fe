import React, { useState } from "react";
import axios from "axios";
import "../authStyles.css";

const Register = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const userInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const userRegistration = e => {
    e.preventDefault();
    axios
      .post(`https://archlife-be.herokuapp.com/api/auth/register`, user)
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => console.log(err, "for sure error"));
  };

  return (
    <div className="authContainer">
      <div className="inner-container">
        <div className="box">
          <h1>Register</h1>
          <form onSubmit={userRegistration}>
            <label>email</label> <br />
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={userInput}
              value={user.email}
              autoComplete="off"
            />
            <br />
            <label>password</label> <br />
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={userInput}
              value={user.password}
              autoComplete="off"
            />
            <br />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
