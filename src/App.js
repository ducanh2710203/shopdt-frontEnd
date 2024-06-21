import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import DetailProduct from "./pages/detailProduct";
import SignInSide from "./pages/login";
import PageSearch from "./pages/pageSearch";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iphone" element={<DetailProduct />} />
        <Route path="/id" element={<DetailProduct />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/search" element={<PageSearch />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
