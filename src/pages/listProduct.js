import Pagination from "@mui/material/Pagination";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import CardProduct from "../components/cardProduct";
import BannerSlider from "../components/bannerTop";
export default function listProduct() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Iphone</h2>

      <div
        style={{
          paddingRight: 150,
          paddingLeft: 150,
        }}
      >
        <BannerSlider />

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

        <Pagination count={2} sx={{ paddingY: "20px" }} shape="rounded" />
        <Card sx={{ minWidth: 275, mb: "20px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <h3>Lịch sử hình thành, phát triển của iPhone</h3>
              iPhone là dòng điện thoại thông minh được phát triển từ Apple Inc,
              được ra mắt lần đầu tiên bởi Steve Jobs và mở bán năm 2007. Bên
              cạnh tính năng của một máy điện thoại thông thường, iPhone còn
              được trang bị màn hình cảm ứng, camera, khả năng chơi nhạc và
              chiếu phim, trình duyệt web... Phiên bản thứ hai là iPhone 3G ra
              mắt tháng 7 năm 2008, được trang bị thêm hệ thống định vị toàn
              cầu, mạng 3G tốc độ cao. Trải qua 15 năm tính đến nay đã có đến 34
              mẫu iPhone được sản xuất từ dòng 2G cho đến iPhone 13 Pro Max và
              Apple là một trong những thương hiệu điện thoại được yêu thích và
              sử dụng phổ biến nhất trên thế giới.
              <h3>iPhone có những mã máy nào?</h3>
              Những chiếc iPhone do Apple phân phối tại thị trường nước nào thì
              sẽ mang mã của nước đó. Ví dụ: LL: Mỹ, ZA: Singapore, TH: Thái
              Lan, JA: Nhật Bản, Những mã này xuất hiện tại Việt Nam đều là hàng
              xách tay, nhập khẩu. Còn tại Việt Nam, iPhone sẽ được mang mã
              VN/A. Tất cả các mã này đều là hàng chính hãng phân phối của
              Apple. Lợi thế khi bạn sử dụng iPhone mã VN/A đó là chế độ bảo
              hành tốt hơn với 12 tháng theo tiêu chuẩn của Apple. iPhone của
              bạn sẽ được bảo hành tại tất cả các trung tâm bảo hành Apple tại
              Việt Nam, một số mã quốc tế bị từ chối bảo hành và phải đem ra các
              trung tâm bảo hành Apple tại nước ngoài. Rất là phức tạp đúng
              không nào?
              <h3>Apple đã khai tử những dòng iPhone nào?</h3>
              Tính đến nay, Apple đã khai tử (ngừng sản xuất) các dòng iPhone
              đời cũ bao gồm: iPhone 2G, iPhone 3G, iPhone 4, iPhone 5 series,
              iPhone 6 series, iPhone 7 series, iPhone 8 series, iPhone X
              series, iPhone SE (thế hệ 1), iPhone SE (thế hệ 2), iPhone 11 Pro,
              iPhone 11 Pro Max, iPhone 12 Pro, iPhone 12 Pro Max.
            </Typography>
          </CardContent>
        </Card>
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
