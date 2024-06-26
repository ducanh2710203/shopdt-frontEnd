import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgDetailProduct() {
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
      img: "https://shopdunk.com/images/thumbs/0020075_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020074_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020076_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020077_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020078_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020079_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020080_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020081_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
    {
      img: "https://shopdunk.com/images/thumbs/0020082_iphone-15-pro-max-128gb_550.jpeg",
      title: "ngu",
    },
  ];
  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div style={{ background: "white" }} key={index}>
          <img
            src={banner.img}
            style={{ margin: "10px auto" }}
            width="550px"
            height="550px"
            alt={banner.title}
          />
        </div>
      ))}
    </Slider>
  );
}
