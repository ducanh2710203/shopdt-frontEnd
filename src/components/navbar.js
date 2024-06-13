import * as React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

export default function NavBar() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case "Home":
        navigate("/");
        break;
      case "login":
        navigate("/login");
        break;
      default:
        break;
    }
  };
  return (
    <BottomNavigation
      sx={{ background: "grey" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="login"
        value="login"
        icon={<FavoriteIcon />}
      />
    </BottomNavigation>
  );
}
