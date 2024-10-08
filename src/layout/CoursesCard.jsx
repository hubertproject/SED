/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
 

const CoursesCard = (props) => {
  const { img, title, description } = props;

  return (
    <div className="flex flex-col items-center justify-between bg-whitey border-2 border-lightText md:border-none md:w-3/12 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all md:mx-5">
      <div className="w-3/5">
        <img src={img} alt="img" />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-center my-5">{title}</h3>
        <p className="text-lightText text-left md:text-start text-semibold text-1xl">{description}</p>
      </div>
    </div>
  );
};

export default CoursesCard;
