import React, { Component } from "react";
import FormAuthorization from "../components/formAuthorization";
import "../css/form.css";
class MainPage extends Component {
  state = {
    showContent: "Login",
  };

  changeFormContent = () => {
    this.setState({
      showContent:
        this.state.showContent !== "Login" ? "Login" : "Create account"
    });
  };

  render() {
    const content = this.state.showContent;
    return (
      <div className="form-container">
        <FormAuthorization changeUser={this.props.changeUser} typeAction={content} />
        <div className="clickable action-switcher" onClick={() => this.changeFormContent()}>
          {`Switch to ${content !== "Login" ? "Login" : "Create account"}`}
        </div>
      </div>
    );
  }
}

export default MainPage;
