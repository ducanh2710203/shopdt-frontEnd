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
import SignInSide from "./pages/login";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/login" element={<SignInSide />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
