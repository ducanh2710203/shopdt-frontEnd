import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import DetailProduct from "./pages/detailProduct";
import CardProduct from "./components/cardProduct";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/card" element={<CardProduct />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
