/* eslint-disable no-unused-vars */
import React from "react";

const Stages = () => {
  return (
    <div className="bg-red-500 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Stages of the Programme</h2>
      <h3 className="text-lg mb-8">This is how the processes are done</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-600 rounded-lg p-4">
          <div className="text-4xl font-bold mb-4">01</div>
          <h4 className="text-xl font-bold mb-2">Stage 1</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere.
          </p>
        </div>

        <div className="bg-red-600 rounded-lg p-4">
          <div className="text-4xl font-bold mb-4">02</div>
          <h4 className="text-xl font-bold mb-2">Stage 2</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere.
          </p>
        </div>

        <div className="bg-red-600 rounded-lg p-4">
          <div className="text-4xl font-bold mb-4">03</div>
          <h4 className="text-xl font-bold mb-2">Stage 3</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stages;
