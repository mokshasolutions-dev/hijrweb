import H1 from "./ui/h1";
import Image from "next/image";

const About = () => {
  return (
    <section className="   py-10 text-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <H1 title="About Us - HIJR" />

        {/* About Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16 pt-10">
          <div className="md:w-1/2 text-lg leading-relaxed text-gray-700">
            <p>
              <strong className="text-green-600">HIJR</strong> (Healthcare
              International Jobs Recruitment) was founded with a mission to
              bridge the gap between healthcare professionals and institutions
              worldwide. With a keen understanding of the unique recruitment
              needs in emerging and mid-tier establishments, we offer a platform
              that is simple, affordable, and highly effective. Whether you &apos; re
              looking to hire or seeking your next job in healthcare, HIJR
              provides the support and tools you need to succeed.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/hijr_homepag.png"
              alt="HIJR Home Page"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/vision.jpg"
              alt="Vision img"
              width={600}
              height={600}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
              To empower healthcare professionals and institutions by
              simplifying the job recruitment process and enhancing access to
              global opportunities.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row  items-center gap-10 mb-16">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 ">
              <li>
                Provide a reliable, affordable recruitment platform tailored for
                healthcare.
              </li>
              <li>
                Connect job seekers with institutions that match their skills
                and aspirations.
              </li>
              <li>
                Support the growth of mid-tier healthcare institutions with
                quality staffing solutions.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mission.avif"
              alt="Mission img"
              width={600}
              height={600}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Why HIJR Stands Out */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
            Why HIJR Stands Out
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 max-w-4xl mx-auto text-left">
            <li>
              <strong>Media-expert Led Innovation:</strong> Our platform is
              designed by healthcare experts who understand industry pain
              points.
            </li>
            <li>
              <strong>Ethical Practices:</strong> Zero spam, zero fake listings,
              and 100% data security compliance.
            </li>
            <li>
              <strong>Community Focus:</strong> Free career counselling and
              scholarships for upskilling.
            </li>
          </ul>
        </div>
      </div>

      {/* Stakeholders Cards */}
      <div className="w-full bg-green-200 py-10">
        <div className="text-center max-w-7xl mx-auto">
          <H1 title="Join the HIJR Revolution" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Job Seekers",
                description: "Find roles that respect your skills.",
                icon: "/jobseeker_icon.png",
              },
              {
                title: "Employers",
                description: "Build teams that drive patient care forward.",
                icon: "/empolyer.png",
              },
              {
                title: "Partners",
                description: "Collaborate with us to grow global reach.",
                icon: "/partner.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={64}
                  height={64}
                  className="mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
