import ListTop from "../components/listTop";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import BannerSlider from "../components/bannerTop";

const itemData = [
  {
    img: "https://shopdunk.com/images/thumbs/0024430_iphone-13_240.png",
    title: "iphone-13",
    price: "13.390.000₫",
  },
  {
    img: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
    title: "iphone-15-128gb",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
    title: "iphone-11",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-plus_1_.png",
    title: "iphone-14-plus",
    price: "13.390.000₫",
  },
];

const itemData1 = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-10-2-inch-2021_1.png",
    title: "iPad 10.2 2021 WiFi 64GB ",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-5.png",
    title: "iPad Air 5 10.9 inch (2022)",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-10-9-inch-2022.png",
    title: "iPad Gen 10 10.9 inch 2022",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-6-m2-11-inch_9_.jpg",
    title: "iPad Air 6 M2",
    price: "13.390.000₫",
  },
];
const itemData2 = [
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
    title: "Samsung Galaxy S24 Ultra 12GB",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png",
    title: "Samsung Galaxy A15 LTE 8GB",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-ulatra_2_.png",
    title: "Samsung Galaxy S23 Ultra 12GB",
    price: "13.390.000₫",
  },
  {
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-z-lip5_3_.png",
    title: "Samsung Galaxy Z Flip5 256GB",
    price: "13.390.000₫",
  },
];

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
          <ListTop itemData={itemData} />
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
          <ListTop itemData={itemData1} />
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
          <ListTop itemData={itemData2} />
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
