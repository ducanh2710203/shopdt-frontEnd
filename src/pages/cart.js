import React from "react";
import Button from "@mui/material/Button";
import NumberInputIntroduction from "../components/inpNumber";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import OutlinedCard from "../components/completeOrder";
import { TextField, Grid } from "@mui/material";
const products = [
  {
    imgSrc:
      "https://shopdunk.com/images/thumbs/0022266_iphone-15-pro-max-256gb_80.png",
    name: "iPhone 15 Pro Max 256GB",
    price: 29390000,
    quantity: 1,
    color: "đen",
    address: "miền bắc",
    form: "mua thẳng",
  },
  {
    imgSrc:
      "https://shopdunk.com/images/thumbs/0022266_iphone-15-pro-max-256gb_80.png",
    name: "iPhone 15 Pro Max 256GB",
    price: 29390000,
    quantity: 1,
    color: "đen",
    address: "miền bắc",
    form: "mua thẳng",
  },
];

export default function Cart() {
  return (
    <div style={{ padding: "20px 250px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "auto",
        }}
      >
        <div
          style={{
            flex: 1,
            marginRight: "20px",

            height: "100%",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "white",
              marginBottom: "16px",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid black",
                  textAlign: "left",
                  height: "50px",
                }}
              >
                <th style={{ textAlign: "center" }}>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá bán</th>
                <th style={{ width: "20%" }}>Số lượng</th>
              </tr>
            </thead>
            {products.map((product, index) => (
              <>
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      style={{
                        width: "50%",
                        height: "50%",
                        marginTop: "10px",
                      }}
                    />
                  </td>
                  <td>
                    {product.name}
                    <br />
                    <span style={{ color: "grey" }}>
                      Màu sắc: {product.color}
                      <br />
                      Khu vực: {product.address}
                      <br />
                      Hình thức: {product.form}
                    </span>
                  </td>
                  <td>{product.price}</td>
                  <td>
                    {/* <div style={{ display: "flex" }}> */}
                    <div style={{ display: "flex" }}>
                      <NumberInputIntroduction quantity={product.quantity} />
                      <IconButton
                        sx={{ padding: "15px 15px" }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ textAlign: "right" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        marginRight: "30px",
                        width: "30%",
                        borderRadius: "10px !important",
                      }}
                    >
                      Câp nhật giỏ hàng
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        marginRight: "30px",
                        width: "30%",
                        borderRadius: "10px !important",
                      }}
                    >
                      Tiếp tục mua sắm
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    style={{ paddingBottom: "5px", paddingTop: "5px" }}
                  >
                    <Divider />
                  </td>
                </tr>
              </>
            ))}
          </table>
          <h3>Thông tin thanh toán</h3>
          <div style={{ background: "white", padding: "14px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Tên"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Số điện thoại"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <h4>Thông tin thanh toán</h4>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Tỉnh/Thành Phố"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Quận/Huyện"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Cụ thể"
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" sx={{ width: "100%" }}>
                  Xác nhận địa chỉ
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          style={{
            width: "30%",
          }}
        >
          <OutlinedCard />
        </div>
      </div>
    </div>
  );
}
