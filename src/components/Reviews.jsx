// eslint-disable-next-line no-unused-vars
import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Reviews = () => {
  const reviews = [
    {
      img: img1,
      text: "I had a great experience with this institute. The software engineering training is top-notch, and the German language lessons are incredibly helpful for my career prospects in Germany. I highly recommend it!",
      person: "John Van",
    },
    {
      img: img2,
      text: "The SEDS Institute is a game-changer. Their training programs are perfectly aligned with industry needs. I'm now well-prepared for a successful career in software engineering. Thank you and wish you enroll!",
      person: "Jane Bob",
    },
    {
      img: img3,
      text: "I can't thank the SEDS Institute enough. The training here made a significant difference in my life. The certifications from the USA and the Goethe Institute opened doors to exciting opportunities in Germany.",
      person: "David Okay",
    },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className="flex flex-col md:flex-row gap-5 mt-5 text-black">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            img={review.img}
            text={review.text}
            person={review.person}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
