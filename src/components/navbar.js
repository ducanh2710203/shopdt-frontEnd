import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
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
      sx={{ background: "#515154" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        sx={{ color: value === "/" ? "green" : "white" }}
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Login"
        sx={{ color: value === "/login" ? "green" : "white" }}
        value="/login"
        icon={<LoginIcon />}
      />
    </BottomNavigation>
  );
}
