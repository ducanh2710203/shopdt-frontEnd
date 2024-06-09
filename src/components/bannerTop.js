import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
  };

  const banners = [
    {
      img: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPhone%2015%20Pro%20Max%20T6_PC.jpg",
      title: "",
    },
    {
      img: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iMac%20T6_PC.jpg",
      title: "",
    },
    {
      img: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPad%20Air%205%20T6_PC.jpg",
      title: "",
    },
  ];
  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          <img src={banner.img} width="100%" height={400} alt={banner.title} />
        </div>
      ))}
    </Slider>
  );
}
