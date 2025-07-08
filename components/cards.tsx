"use client";
import Link from "next/link";
import { jobSearches } from "@/data/data";

export default function Cards() {
  return (
    <section className="  px-4 py-16 bg-green-50 w-full ">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-10">
          Popular Searches on <span className="text-green-600">HIJR</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          {jobSearches.map((job, index) => (
            <div
              key={index}
              className="relative bg-white group hover:bg-gradient-to-br hover:from-white hover:to-green-300  border-2 border-transparent rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="text-sm text-gray-500 mb-2">
                TRENDING AT {job.rank}
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-6">
                {job.title}
              </div>

              <Link
                href="https://www.hijr.in/candidate/find-job"
                className="text-sm text-green-600 font-medium hover:underline"
              >
                View all →
              </Link>

              {/* <div className="absolute bottom-0 right-2 overflow-hidden">
              <Image
                src={job.img}
                alt={job.title}
                width={200}
                height={100}
                className="object-contain"
              />
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
