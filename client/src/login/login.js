//============== React import ==============//
import React from "react";
import { Link } from "react-router-dom";

//============== Files and Folders imports ==============//
import "./login.css";

//============== Material UI ==============//
import Button from "@mui/material/Button";

//============== Code ==============//
function Login() {
  return (
    <>
    <br/>
      <center>
        <br/>
        <h1>Welcome to your U.S. adventures tracker!</h1>
        <h3>
          On this website you can create a detailed log of each of your national
          trips.
        </h3>
      </center>

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
                  //   className="form-control mt-1"
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
                  //   className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
            </center>

            <br />
            <center>
              <div className="d-grid gap-2 mt-3">
                <Link to="/states">
                  <Button type="submit" className="btn btn-primary">
                    Login
                  </Button>
                </Link>
              </div>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

//consider disabling the submit button if
