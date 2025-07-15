import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "https://www.elementvape.com/_next/image?url=https%3A%2F%2Fadmin.elementvape.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fa%2Fnaked_100_-_freebase_-_hawaiian_pog.png&w=640&q=75",
    "https://www.elementvape.com/_next/image?url=https%3A%2F%2Fadmin.elementvape.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fa%2Fnaked_100_-_salts_-_melon_kiwi.png&w=640&q=75",
    "https://www.elementvape.com/_next/image?url=https%3A%2F%2Fadmin.elementvape.com%2Fmedia%2Fcatalog%2Fproduct%2Fn%2Fa%2Fnaked_100_-_salts_-_american_patriots.png&w=640&q=75",
];

export default function ProductImageGallery() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleClick = (img) => {
        setSelectedImage(img);
    };

    const thumbSettings = {
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="mb-4">
                <img src={selectedImage} alt="Selected" className="w-full" />
            </div>

            <Slider {...thumbSettings}>
                {images.map((img, index) => (
                    <div key={index} className="px-1">
                        <img
                            src={img}
                            alt={`Thumbnail ${index}`}
                            onClick={() => handleClick(img)}
                            className={`cursor-pointer border ${
                                selectedImage === img
                                    ? "border-blue-500"
                                    : "border-gray-300"
                            }`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
