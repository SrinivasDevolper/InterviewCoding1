import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SecondPage from "./components/secondPage";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
