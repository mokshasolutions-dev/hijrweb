import PageBanner from "@/components/ui/pagebanner";
import Image from "next/image";
import React from "react";
import { sectors } from "@/data/data";

const IndustryPage = () => {
  return (
    <>
      <PageBanner title="Organization" />
      <section className="max-w-7xl mx-auto px-4 py-16 font-poppins">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
          Tailored Recruitment Solutions for Every Healthcare Sector
        </h2>

        <div className="space-y-20">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>

              <div className="lg:w-1/2 ">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center ">
                  {sector.title}
                </h3>
                <hr className="w-40 text-green mb-3 h-5 border-t-4" />
                <div className="mb-3">
                  <strong >Roles We Fill:</strong>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {sector.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <strong>Challenges We Solve:</strong>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {sector.challenges.map((ch, idx) => (
                      <li key={idx}>{ch}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>HIJR’s Solutions:</strong>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {sector.solutions.map((sol, idx) => (
                      <li key={idx}>{sol}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why HIJR Works for Every Sector?
          </h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>
              ✅ <strong>Customizable Job Filters:</strong> Tailor searches by
              industry-specific criteria (e.g., “CTRI-registered”).
            </li>
            <li>
              ✅ <strong>Sector-Success Managers:</strong> Get dedicated support
              for your industry’s hiring challenges.
            </li>
            <li>
              ✅ <strong>Compliance Assurance:</strong> Automated checks for
              certifications, licenses, and regulatory requirements.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow">
              Hire ICU Staff Now
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow">
              Recruit Medical Reps
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow">
              Find Pathologists
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow">
              Post Faculty Roles
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
