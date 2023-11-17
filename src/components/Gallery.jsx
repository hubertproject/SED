/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 // Gallery.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../layout/Heading";

const ImageCard = ({ img, isSelected }) => (
  <div
    className={`relative w-16 h-16 rounded-xl overflow-hidden ${
      isSelected ? "border-2 border-white" : "cursor-pointer"
    }`}
  >
    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
  </div>
);

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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    fade: true,
  };

  const handleImageClick = (index) => {
    if (selectedImage === null) {
      setSelectedImage(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  

  const handleNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <Heading title1="Our" title2="Gallery" className="mt-5" />
      <div className="w-full mt-20 overflow-hidden px-8 mt-5">
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
              className="max-w-full max-h-full rounded mx-auto"
              onClick={handleCloseModal}
            />
        <button
  onClick={handleCloseModal}
  className="absolute top-4 right-4 text-red-500 font-bold text-2xl close-button"
>
  Close
</button>


            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={handlePrevImage}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer"
              >
                {"<"}
              </button>
              <ImageCard img={data[selectedImage].img} isSelected={true} />
              <button
                onClick={handleNextImage}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const data = [
  { img: `/students/h2.jpg` },
  { img: `/students/h3.jpg` },
  { img: `/students/h1.jpg` },
  { img: `/students/h5.jpg` },
  { img: `/students/h2.jpg` },
  { img: `/students/h3.jpg` },
  { img: `/students/h1.jpg` },
  { img: `/students/h5.jpg` },
];

export default Gallery;
