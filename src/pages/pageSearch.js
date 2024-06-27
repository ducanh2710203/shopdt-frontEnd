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
    img: "https://shopdunk.com/images/thumbs/0024430_iphone-13_240.png",
    title: "iphone-13",
    price: "13.390.000₫",
  },
  {
    img: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
    title: "iphone-15-128gb",
    price: "13.390.000₫",
  },
];
