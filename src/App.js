import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/successAutorizationpage";
import MainPage from "./pages/mainPage";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const changeUserInfo = (user) => {
    setUserInfo(user);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage changeUser={changeUserInfo} />} />
        {userInfo ? (
          <Route
            path="/success"
            element={<SuccessPage currentUser={userInfo} />}
          />
        ) : null}
      </Routes>
    </div>
  );
}

export default App;
