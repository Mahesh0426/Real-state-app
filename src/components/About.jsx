import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { Home, Users, Building, MapPin } from "lucide-react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const stats = [
    { icon: Home, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "20k+", label: "Happy Clients" },
    { icon: Building, value: "50+", label: "Projects Completed" },
    { icon: MapPin, value: "10+", label: "Cities Covered" },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        About <span className="text-blue-600">RealmX</span>
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className=" text-gray-500  max-w-80 text-center  mb-8 ">
        At RealmX, we believe that finding your dream home should be an exciting
        and seamless journey.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg"
          alt="brandImage"
        />
        {/* <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium textpgray-800">10+</p>
              <p>years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium textpgray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium textpgray-800">20+</p>
              <p>mn. Sq. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium textpgray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
        </div> */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-gray-600 mb-8">
            With a legacy spanning over a decade, RealmX has consistently
            delivered unparalleled real estate solutions. Our team of experts is
            dedicated to turning your property dreams into reality, ensuring
            each project reflects our commitment to quality, innovation, and
            customer satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <stat.icon
                  className={`w-8 h-8 mx-auto mb-2 ${
                    hoveredIndex === index ? "text-pink-600" : "text-gray-400"
                  }`}
                />
                <h4 className="text-4xl font-bold text-blue-600">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
