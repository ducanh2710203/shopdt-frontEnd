import { Grid, Divider, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ImgDetailProduct from "../components/imgDetailProduct";
export default function DetailProduct() {
  return (
    <>
      <Grid container sx={{ padding: "30px 150px " }} spacing={2}>
        <Grid
          item
          sx={{
            background: "white",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "570px",
          }}
          xs={6}
        >
          <div style={{ background: "#f5f5f7" }}>
            <ImgDetailProduct />
          </div>
        </Grid>
        <Grid item sx={{ background: "white", padding: "15px" }} xs={6}>
          <div style={{ padding: "10px 15px", marginBottom: "15px" }}>
            <h3>iPhone 15 Pro Max 256GB</h3>
            <Divider />
            <h3 style={{ color: "rgb(0, 102, 204)" }}>29.390.000₫</h3>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                dung lượng
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="256GB"
                  control={<Radio />}
                  label="256GB"
                  sx={{
                    backgroundColor: "grey",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
                <FormControlLabel
                  value="512GB"
                  control={<Radio />}
                  label="512GB"
                  sx={{
                    backgroundColor: "grey",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
                <FormControlLabel
                  value="1TB"
                  control={<Radio />}
                  label="1TB"
                  sx={{
                    backgroundColor: "grey",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Màu sắc
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Titan đen"
                  control={<Radio />}
                  label="Titan đen"
                  sx={{
                    backgroundColor: "rgb(80, 81, 83)",
                    color: "white",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
                <FormControlLabel
                  value="Titan trắng"
                  control={<Radio />}
                  label="Titan trắng"
                  sx={{
                    backgroundColor: "rgb(243, 242, 237)",
                    color: "black",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
                <FormControlLabel
                  value="Titan xanh"
                  control={<Radio />}
                  label="Titan xanh"
                  sx={{
                    backgroundColor: "rgb(80, 88, 101)",
                    color: "white",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
                <FormControlLabel
                  value="Titan tự nhiên"
                  control={<Radio />}
                  label="Titan tự nhiên"
                  sx={{
                    backgroundColor: "rgb(193, 189, 178)",
                    color: "black",
                    borderRadius: "4px",
                    padding: "0px 10px",
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <a href="/cart">
                <Button variant="contained" sx={{ width: "100%" }}>
                  Mua ngay
                </Button>
              </a>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" sx={{ width: "100%" }}>
                Trả góp
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" sx={{ width: "100%" }}>
                Thu cũ đổi mới
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <h1 style={{ textAlign: "center" }}>
        Được thiết kế để tạo nên khác biệt.
      </h1>
    </>
  );
}
