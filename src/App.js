import "./App.css";
import DropDown from "./components/DropDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//AHAHAHAHAHcommit
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DropDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
