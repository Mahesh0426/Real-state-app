import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Create the formData object
    const formData = new FormData(event.target);

    const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast("Form Submitted Successfully!!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
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

      <form onSubmit={onSubmit} className="max-w-lg mx-auto text-gray-600 pt-8">
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

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className=" bg-blue-500 text-white py-2 px-12  mb-10 rounded-full hover:bg-blue-700">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
