import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        background: "#515154",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        sx={{ color: "white" }}
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Search"
        sx={{ color: "white" }}
        value="/search"
        icon={<Search />}
      />
      <BottomNavigationAction
        label="Cart"
        sx={{ color: "white" }}
        value="/cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="Login"
        sx={{ color: "white" }}
        value="/login"
        icon={<LoginIcon />}
      />
    </BottomNavigation>
  );
}
