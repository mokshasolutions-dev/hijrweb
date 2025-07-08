import PageBanner from "@/components/ui/pagebanner";
import Image from "next/image";

const features = [
  {
    title: "Verified Profiles & Listings",
    description:
      "Rigorous 3-step verification for employers (GST, license, and address checks).",
    image: "/profile.png",
  },
  {
    title: "Smart Communication Tools",
    description:
      "In-App Chat to negotiate salaries and share documents securely.\nInterview Scheduling synced with Google/Outlook.",
    image: "/communication.jpg",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Candidates: Track profile views and market demand.\nEmployers: Monitor engagement, cost-per-hire, and diversity metrics.",
    image: "/analytics.jpg",
  },
  {
    title: "Customizable Branding",
    description:
      "Employers can design career pages with logos, galleries, and employee success stories.",
    image: "/branding.jpg",
  },
];

const Services = () => {
  return (
    <>
      <PageBanner title="Services" />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#1f1f1f] mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow py-10 "
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={300}
                className="w-full lg:w-1/2 h-60 object-contain"
              />
              <div className="p-6 lg:w-1/2">
                <h3 className="text-xl font-semibold text-[#1f1f1f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
