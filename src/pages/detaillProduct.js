import { Grid, Divider, Button } from "@mui/material";
export default function DetailProduct() {
  return (
    <>
      <Grid container sx={{ padding: "30px 150px " }} spacing={2}>
        <Grid item sx={{ background: "white" }} xs={6}>
          ngu
        </Grid>
        <Grid item sx={{ background: "white", padding: "15px" }} xs={6}>
          <div style={{ padding: "0px 15px" }}>
            <h3>iPhone 15 Pro Max 256GB</h3>
            <Divider />
            <h3 style={{ color: "rgb(0, 102, 204)" }}>29.390.000₫</h3>
            <p style={{ color: "grey" }}>Dung lượng</p>
            <div style={{ display: "flex" }}>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: "50px",
                  marginX: "5px",
                  borderColor: "blue",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "rgb(80, 81, 83)",
                  }}
                ></div>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: "50px",
                  marginX: "5px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "rgb(243, 242, 237)",
                  }}
                ></div>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ borderRadius: "50px", marginX: "5px" }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "rgb(80, 88, 101)",
                  }}
                ></div>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ borderRadius: "50px", marginX: "5px" }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "rgb(193, 189, 178)",
                  }}
                ></div>
              </Button>
            </div>
            <p style={{ color: "grey" }}>Màu sắc</p>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ width: "100%" }}>
                Mua ngay
              </Button>
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
