import React from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <center>
            <h3 className="Auth-form-title">Sign In</h3>
          </center>

          <center>
            <div className="form-group mt-3">
              <label>Email address </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
          </center>

          <br />

          <center>
            <div className="form-group mt-3">
              <label>Password </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
          </center>

          <br />
          <center>
            <div className="d-grid gap-2 mt-3">
              <Link to="/states">
                <Button type="submit" className="btn btn-primary">
                  Submit
                </Button>
              </Link>
            </div>
          </center>
        </div>
      </form>
    </div>
  );
}

export default Login;

//consider disabling the submit button if 