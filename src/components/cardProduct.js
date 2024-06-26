import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

export default function CardProduct(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="350"
        image={props.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" sx={{ fontSize: 10 }}>
                Thêm vào giỏ hàng
              </Button>
            </Grid>
            <Grid item xs={6}>
              <a href="/id">
                <Button variant="outlined" sx={{ fontSize: 10 }}>
                  Chi tiết sản phẩm
                </Button>
              </a>
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
