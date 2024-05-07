import "./App.css";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
