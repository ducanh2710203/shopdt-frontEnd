import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        sx={{
          width: "100%",
          height: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="top"
        open={open}
      >
        <Grid sx={{ padding: "20px" }} container spacing={0}>
          <Grid item xs={12}>
            <div style={{ width: "80%", margin: "auto" }}>
              <TextField
                sx={{ width: "80%", height: "70%" }}
                label="tìm kiếm"
                variant="outlined"
              />
              <a href="search">
                <Button variant="contained" onClick={handleDrawerClose}>
                  <Search sx={{ height: "45px" }} />
                </Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Drawer>
      <BottomNavigation
        sx={{
          background: "#515154",
          // position: "fixed",
          // top: 0,
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
          // value="/search"
          onClick={handleDrawerOpen}
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
    </>
  );
}
