import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import StopWatch from "./Stopwatch";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </div>
  );
}

export default App;
