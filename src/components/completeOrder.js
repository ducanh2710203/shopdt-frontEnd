import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const card = <React.Fragment></React.Fragment>;

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Mã giảm giá"
                inputProps={{ "aria-label": "Mã giảm giá" }}
              />
              <Button variant="contained" color="inherit">
                Primary
              </Button>
            </Paper>
          </Typography>

          <div style={{ padding: "50px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 20, color: "grey" }}>Tổng phụ:</span>{" "}
              <span style={{ fontSize: 20 }}>29.390.000₫</span>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 20 }}>Tổng cộng:</span>
              <span style={{ color: "blue", fontSize: 22 }}>
                <b>29.390.000₫</b>
              </span>
            </div>
          </div>
          <Divider />
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="đã đọc và đồng ý với điều khoản"
              />
            </FormGroup>
          </div>
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <Button variant="contained" sx={{ width: "100%" }}>
            Xác nhận đặt hàng
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
