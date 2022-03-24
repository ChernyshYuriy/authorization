import "./App.css";
import { Routes, Route } from "react-router-dom";
import SuccessPage from './pages/successAutorizationpage';
import MainPage from "./pages/mainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit-shopping-list" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
