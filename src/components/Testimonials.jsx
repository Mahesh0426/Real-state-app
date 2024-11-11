import React from "react";
import { assets, testimonialsData } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimionials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers<span className="text-blue-600">Testimionials</span>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 mt-3  "></div>
      </h1>
      <p className=" text-gray-500  max-w-80 text-center mb-12 mx-auto">
        Genuine Experiences from Individuals Who Discovered Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimionial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimionial.image}
              alt={testimionial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimionial.name}
            </h2>
            <p clasName="text-gray-500 mb-4 text-sm">{testimionial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimionial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="star " />
              ))}
            </div>
            <p className="text-gray-500">{testimionial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
