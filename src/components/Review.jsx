 /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../layout/Heading";

function Review() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

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
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div>
      <Heading title1="Our" title2="Reviews" className="mt-5" />
      <div className="w-full mt-20 overflow-hidden px-10 mt-5">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="w-full slick-slide">
              {/* Add slick-slide class above */}
              <div className="bg-white h-[400px] text-black rounded-xl mb-8 ">
                <div className="h-56 bg-maroonn flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Kofi John`,
    img: `/students/a1.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Esi Anderson`,
    img: `/students/a2.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Naa Ama`,
    img: `/students/a3.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Man Louie`,
    img: `/students/a4.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/a5.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Review;
