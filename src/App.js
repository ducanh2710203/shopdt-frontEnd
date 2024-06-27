import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home";
import Register from "./pages/register";
import ListProduct from "./pages/listProduct";
import SignInSide from "./pages/login";
import PageSearch from "./pages/pageSearch";
import DetailProduct from "./pages/detaillProduct";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Cart from "./pages/cart";

function App() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iphone" element={<ListProduct />} />
        <Route path="/id" element={<DetailProduct />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<PageSearch />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

export default App;
