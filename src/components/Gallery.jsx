/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../layout/Heading";

function Gallery() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const updateSlides = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(3);
      setSlidesToScroll(1);
    } else {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    }
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Heading title1="Our" title2="Gallery" className="mt-5" />
      <div className="w-full mt-20 overflow-hidden px-8 mt-10">
        <div className="space-y-20">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="w-full h-[400px]" onClick={() => handleImageClick(index)}>
                <img
                  src={d.img}
                  alt=""
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center mt-5">
          <div className="max-w-3xl w-full p-4">
            <img
              src={data[selectedImage].img}
              alt="Full View"
              className="max-w-full max-h-full rounded cursor-pointer"
              onClick={handleCloseModal}
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-red-500 font-bold text-2xl"
            >
              Close
            </button>
            <div className="mt-4 grid grid-cols-3 gap-4 overflow-x-auto max-h-96">
              {data.map((d, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 cursor-pointer rounded-xl overflow-hidden ${
                    index === selectedImage ? "border-2 border-white" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={d.img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const data = [
  { img: `/students/a1.png` },
  { img: `/students/a2.png` },
  { img: `/students/a3.png` },
  { img: `/students/a4.png` },
  { img: `/students/a5.png` },
  { img: `/students/a1.png` },
  { img: `/students/a2.png` },
  { img: `/students/a3.png` },
  { img: `/students/a4.png` },
  { img: `/students/a5.png` },
  { img: `/students/a1.png` },
  { img: `/students/a2.png` },
  { img: `/students/a3.png` },
  { img: `/students/a4.png` },
  { img: `/students/a5.png` },
  { img: `/students/a1.png` },
  { img: `/students/a2.png` },
  { img: `/students/a3.png` },
  { img: `/students/a4.png` },
  { img: `/students/a5.png` },
];

export default Gallery;
