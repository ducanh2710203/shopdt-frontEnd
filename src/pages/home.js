import ListTop from "../components/listTop";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import BannerSlider from "../components/bannerTop";

export default function HomePage() {
  return (
    <>
      <BannerSlider />
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px", height: "100%" }}>
          <Sidebar />
        </div>
        <div
          style={{
            flex: 1,
            paddingRight: 150,
            paddingLeft: 150,
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            <b>Iphone</b>
          </h3>
          <ListTop />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: 4,
            }}
          >
            <Button
              sx={{ marginX: "auto" }}
              variant="outlined"
              component={Link}
              to="/iphone"
            >
              Show all
            </Button>
          </Box>

          <h3 style={{ textAlign: "center" }}>
            <b>Ipad</b>
          </h3>
          <ListTop />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: 4,
            }}
          >
            <Button
              sx={{ marginX: "auto" }}
              variant="outlined"
              component={Link}
              to="/iphone"
            >
              Show all
            </Button>
          </Box>

          <h3 style={{ textAlign: "center" }}>
            <b>Samsung</b>
          </h3>
          <ListTop />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: 4,
            }}
          >
            <Button
              sx={{ marginX: "auto" }}
              variant="outlined"
              component={Link}
              to="/iphone"
            >
              Show all
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
}
