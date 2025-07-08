import Image from "next/image";
import Link from "next/link";

const EmploySection = () => {
  return (
    <section className="bg-green-100 rounded-2xl px-6 md:px-10 pt-10 max-w-7xl mx-auto mt-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/employe_img.png" // Replace with actual image path
            alt="Employer img"
            width={1000}
            height={1000}
            className="w-full h-[50vh] object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-4">
          <div className="inline-block bg-white/60 text-green-600 font-semibold text-sm px-4 py-1 rounded-md shadow-sm">
            HIJR FOR EMPLOYERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Want to hire?
          </h2>
          <p className="text-gray-800 text-sm md:text-base">
            Find the best candidate from Thousands of active job seekers!
          </p>
          <button>
            <Link
              href="https://www.hijr.in/candidate/find-job"
              className="inline-flex items-center justify-center border border-green-500 text-green-600 font-medium px-6 py-2 rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300"
            >
              Post job →
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmploySection;
