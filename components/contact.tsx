import React from "react";
import H1 from "./ui/h1";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <H1 title="Contact Us" />

        {/* Contact Content */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/heroimg.jpg"
                alt="Contact Illustration"
                width={500}
                height={400}
                className="rounded-xl object-cover max-h-96 w-full"
              />
            </div>

            {/* Form Section */}
            <form className="w-full md:w-1/2 flex flex-col gap-5">
              <input
                type="text"
                placeholder="Enter your Name"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
