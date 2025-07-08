import PageBanner from "@/components/ui/pagebanner";
import React from "react";
import { FaRocket } from "react-icons/fa";

const Aplicants = () => {
  return (
    <>
      <PageBanner title="Aplicants" className=""  />
      <section className="bg-white   py-16 px-6 font-poppins">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green mb-6">
            Discover Roles That Align with Your Expertise
          </h2>
          <p className="mb-8 text-lg text-black">
            Whether you &apos; re a clinician, nursing professional, or clinical
            researcher, HIJR empowers you to find meaningful opportunities in:
          </p>

          <ul className="text-black space-y-2 mb-10 text-lg font-medium">
            <li>• Multispecialty Hospitals & Clinics</li>
            <li>• Pharmaceuticals & Medical Research</li>
            <li>• Diagnostic Chains & Medical Colleges</li>
            <li>• Ayush & Allied Healthcare</li>
          </ul>

          <h3 className="text-2xl font-bold text-green mb-4">
            How HIJR Works for You
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-10">
            <div>
              <h4 className="font-semibold text-black mb-1">
                Step 1: Build Your Smart Profile
              </h4>
              <p className="text-black">
                Highlight your qualifications, specialties, certifications, and
                career goals. Add a video resume to stand out (optional).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Step 2: Let AI Do the Heavy Lifting
              </h4>
              <p className="text-black">
                Get tailored job matches based on location, salary, and
                preferences with our smart algorithms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Step 3: Apply with Confidence
              </h4>
              <p className="text-black">
                Apply to verified jobs with one click and track your
                applications in real time with our Smart Dashboard.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">
                Step 4: Connect & Grow
              </h4>
              <p className="text-black">
                Chat with HR teams directly and schedule interviews via our
                integrated calendar.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-green mb-4">
            Exclusive Benefits for Candidates
          </h3>
          <ul className="text-black space-y-2 mb-10">
            <li>
              ✅ <strong>Priority Alerts:</strong> Get instant SMS/email
              notifications for urgent openings.
            </li>
            <li>
              ✅ <strong>Career Boost:</strong> Access free webinars on CV
              building and interview skills.
            </li>
            <li>
              ✅ <strong>Profile Privacy:</strong> Control who sees your details
              with privacy settings.
            </li>
          </ul>

          <button className="mt-6 bg-green hover:text-white hover:bg-darkgreen text-black font-semibold py-2 px-6 rounded-full inline-flex items-center gap-2 shadow-lg transition">
            <FaRocket /> Search Jobs in 30 Seconds
          </button>
        </div>
      </section>
    </>
  );
};

export default Aplicants;
