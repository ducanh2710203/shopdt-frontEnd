import React from "react";
import { Grid, Box } from "@mui/material";
import CardProduct from "./cardProduct";

export default function ListTop() {
  return (
    <Grid container spacing={2} wrap="nowrap" sx={{ display: "inline-flex" }}>
      {itemData.map((item, index) => (
        <Grid item xs={3} key={index} sx={{ display: "inline-block" }}>
          {/* <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1 }}> */}
          {/* <img src={item.img} />
            <br />
            {item.title}
            <br />
            {item.price} */}
          <CardProduct img={item.img} title={item.title} price={item.price} />
          {/* </Box> */}
        </Grid>
      ))}
    </Grid>
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
];
