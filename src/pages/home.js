import ListTop from "../components/listTop";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BannerSlider from "../components/bannerTop";
export default function HomePage() {
  return (
    <>
      <BannerSlider />

      <div style={{ paddingRight: 150, paddingLeft: 150 }}>
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
            to="/detail"
          >
            Show all
          </Button>
        </Box>
      </div>
      <div style={{ paddingRight: 150, paddingLeft: 150 }}>
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
            to="/detail"
          >
            Show all
          </Button>
        </Box>
      </div>
      <div style={{ paddingRight: 150, paddingLeft: 150 }}>
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
            to="/detail"
          >
            Show all
          </Button>
        </Box>
      </div>
    </>
  );
}
