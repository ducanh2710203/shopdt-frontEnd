import React from "react";
import { Grid, Box } from "@mui/material";
import CardProduct from "./cardProduct";

export default function ListTop(props) {
  return (
    <Grid container spacing={2} wrap="nowrap" sx={{ display: "inline-flex" }}>
      {props.itemData.map((item, index) => (
        <Grid item xs={3} key={index} sx={{ display: "inline-block" }}>
          <CardProduct img={item.img} title={item.title} price={item.price} />
        </Grid>
      ))}
    </Grid>
  );
}
