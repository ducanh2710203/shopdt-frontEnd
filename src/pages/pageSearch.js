import Pagination from "@mui/material/Pagination";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import CardProduct from "../components/cardProduct";
import Grouped from "../components/inpSearch";
export default function PageSearch() {
  return (
    <>
      <div
        style={{
          paddingTop: "56px",
          paddingRight: 150,
          paddingLeft: 150,
        }}
      >
        <Grouped />
        <Grid container sx={{ paddingTop: "40px" }} spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={3} key={index}>
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
