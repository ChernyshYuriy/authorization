import React, { Component } from "react";
import GoogleAuthorization from "../components/googleAuthorization";
import "../css/form.css";
import CreateAccount from "./../components/createAccount";
import Login from "./../components/login";

class MainPage extends Component {
  state = {
    showContent: "login",
  };
  render() {
    return (
      <div className="form-container">
        {this.state.showContent === "login" ? <Login /> : <CreateAccount />}
        <GoogleAuthorization />
      </div>
    );
  }
}

export default MainPage;
