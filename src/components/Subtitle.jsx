/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Subtitle.jsx
import React from "react";

const Subtitle = ({ sub1, sub2 }) => {
  return (
    <div className="text-left mt-6">
      <p className="text-1xl">
        <div className="text-left mt-6 text-2xl">Software Engineering</div>
        <h3>
          Software Engineering is a blend of scientific methodologies and human
          craftsmanship, where problem-solving meets creative expressions
          through codes. The human touch in crafting solutions remains integral
          part despite the scientific underpinnings. This is achievable through
          skills acquisition via hands-on  <a href="https://www.make-it-in-germany.com/en/working-in-germany/it-specialist-in-germany" className="text-blue-500" >  Vocational training</a>
        </h3>
      </p>
    </div>
  );
};

export default Subtitle;
