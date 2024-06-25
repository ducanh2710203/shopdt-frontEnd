import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import ListProduct from "./pages/listProduct";
import SignInSide from "./pages/login";
import PageSearch from "./pages/pageSearch";
import DetailProduct from "./pages/detaillProduct";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Cart from "./pages/cart";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iphone" element={<ListProduct />} />
        <Route path="/id" element={<DetailProduct />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/search" element={<PageSearch />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
