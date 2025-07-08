// components/AnimatedStats.jsx
"use client";
import CountUp from "react-countup";
import { stats } from "../data/data";

const AnimatedStats = () => {
  return (
    <section className="py-8  text-center items-center  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-gray-100 w-full justify-center items-center gap-10 px-6 py-8 rounded-xl shadow ">
        {stats.map((item, index) => (
          <div key={index} className="p-4 w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-green-700 mb-2">
              <CountUp end={item.value} duration={4.5} delay={2} separator="," />
              {item.suffix}
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              {item.title}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
