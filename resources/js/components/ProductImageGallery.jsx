import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductImageGallery({ data }) {
    const [selectedImage, setSelectedImage] = useState(data[0]);

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
                <img
                    src={`/images/${selectedImage}`}
                    alt="Selected"
                    className="w-full h-90"
                />
            </div>

            <Slider {...thumbSettings}>
                {data.map((img, index) => (
                    <div key={index} className="px-1">
                        <img
                            src={`/images/${img}`}
                            alt={`Thumbnail ${index}`}
                            onClick={() => handleClick(img)}
                            className={` w-full h-20 cursor-pointer border ${
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
