import { Grid, Button, CardContent, Typography } from "@mui/material";
import CardProduct from "../components/cardProduct";
import Grouped from "../components/inpSearch";
export default function PageSearch() {
  return (
    <>
      <div
        style={{
          paddingTop: "10px",
          paddingRight: 350,
          paddingLeft: 350,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Tìm kiếm</h2>
        <Grid container sx={{ paddingTop: "40px" }} spacing={2}>
          <Grid item sx={{ background: "white", paddingX: "16px" }} xs={12}>
            <Grouped />
          </Grid>
          <Grid
            item
            sx={{
              background: "white",
              display: "flex",
              paddingBottom: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
          >
            <a href="search">
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Tìm kiếm
              </Button>
            </a>
          </Grid>

          {itemData.map((item, index) => (
            <Grid item xs={4} key={index}>
              <CardProduct
                img={item.img}
                title={item.title}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
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
