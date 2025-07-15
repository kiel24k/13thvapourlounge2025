import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef();

  const images = [
    "https://truthinitiative.org/sites/default/files/styles/original_limited/public/media/images/standard/2022/08/Stacked-JUUL-Vuse-Puff-Bar-Breeze-Hyde-Vape-Social.jpg",
    "https://truthinitiative.org/sites/default/files/styles/original_limited/public/media/images/standard/2022/08/Stacked-JUUL-Vuse-Puff-Bar-Breeze-Hyde-Vape-Social.jpg",
    "https://truthinitiative.org/sites/default/files/styles/original_limited/public/media/images/standard/2022/08/Stacked-JUUL-Vuse-Puff-Bar-Breeze-Hyde-Vape-Social.jpg",
    "https://truthinitiative.org/sites/default/files/styles/original_limited/public/media/images/standard/2022/08/Stacked-JUUL-Vuse-Puff-Bar-Breeze-Hyde-Vape-Social.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: false, // ✅ keep autoplay running even when hovered
  };

  return (
    <div className="hidden xl:block xl:w-300 md:mx-auto m-auto">
      <Slider ref={sliderRef} {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`slide-${index}`}
              className="md:w-full h-100 w-full object-cover m-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
