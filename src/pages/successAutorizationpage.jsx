import React from "react";
import "../css/successPage.css";

function SuccessPage(props) {
  const userEmail = props.currentUser.user.email;
  return (
    <div className="success-page">
      {userEmail
        ? `You login with this email ${userEmail}`
        : "Your authorization is failed"}
    </div>
  );
}

export default SuccessPage;
