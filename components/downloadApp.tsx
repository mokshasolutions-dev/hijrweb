import Image from "next/image";
import { Star, Download } from "lucide-react";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <section className="bg-gray-100 rounded-2xl px-6 md:px-12 py-12 max-w-7xl mx-auto my-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text + QR */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2 ">Download HIJR app!</h2>
            <p className="text-gray-800 text-sm md:text-base">
              Unlimited job applications | HRs contact you directly | Track your Applications
            </p>
          </div>

          <div className="flex bg-white p-4 rounded-xl shadow-md w-fit gap-4 items-center">
            <h4 className="text-sm font-semibold text-gray-700  items-center align-middle text-center w-1/2 md:w-full">Scan QR to download HIJR app</h4>
            <Link href="">
            <Image
              src="/qr-code.png" // Replace with your actual QR image
              alt="QR Code"
              width={120}
              height={120}
              className="rounded-md"
            /></Link>
          </div>
        </div>

        {/* Right: Phone Image + Stats */}
        <div className="relative md:w-1/2 flex justify-center mx-auto">
          <Image
            src="/mobile_mockup.png" // Phone image you uploaded
            alt="App Preview"
            width={200}
            height={200}
            className="object-contain justify-center mx-auto" 
          />

          <div className="absolute top-4 right-2 bg-green-200 px-4 py-2 rounded-lg text-sm text-gray-900 shadow-sm flex items-center gap-2">
            <Star className="text-yellow-500 w-4 h-4" />
            <span className="font-bold">4.6</span>
            <span className="text-gray-500">5L reviews</span>
          </div>

          <div className="absolute bottom-4 right-2 bg-green-200 px-4 py-2 rounded-lg text-sm text-purple-800 shadow-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            {/* <span className="font-bold"></span> */}
            <span className="text-gray-500">download App</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
