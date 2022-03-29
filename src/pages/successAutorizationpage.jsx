import React from "react";
import "../css/successPage.css";

function SuccessPage(props) {
  const userEmail = props.currentUser.user.email;
  return (
    <div className="success-page">
      {`You login with this email ${userEmail}`}
    </div>
  );
}

export default SuccessPage;
