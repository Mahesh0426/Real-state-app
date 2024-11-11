import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact<span className="text-blue-600">With Us</span>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 mt-3  "></div>
      </h1>
      <p className=" text-gray-500  max-w-80 text-center mb-12 mx-auto">
        "Ready to embark on a new adventure? Together, we’ll design your
        future!"
      </p>

      <form className="max-w-lg mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
