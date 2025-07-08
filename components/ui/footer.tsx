import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#1f1f1f] w-full text-white bottom-0 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 py-12 text-sm tracking-widest  ">
        {/* Useful Links */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-green-500">
            USEFUL LINKS
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-green">
              <Link href="/about-us" className="hover:underline">
                About
              </Link>
            </li>
            <li className="hover:text-green">
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="hover:text-green">
              <Link href="/organization " className="hover:underline">
                Organization
              </Link>
            </li>
            <li className="hover:text-green">
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-green-500">
            CONTACT Us
          </h4>
          <div className="pb-4 md:pb-10">
            <Link href="mailto:contact@hijr.com">contact@hijr.com</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook
                className="hover:text-blue-500 cursor-pointer"
                size={20}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter
                className="hover:text-sky-400 cursor-pointer"
                size={20}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram
                className="hover:text-pink-500 cursor-pointer"
                size={20}
              />
            </a>
          </div>
        </div>

        {/* About or Logo Section */}
        {/* QR App Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-black">
          {/* Text + Play Store */}
          <div className="flex flex-col justify-between gap-2 sm:w-1/2 text-center sm:text-left">
            <h3 className="text-base  font-bold text-[#1f1f1f] font-manrope">
              Apply on the Hijr App
            </h3>
            <p className="text-sm  text-gray-600">
              Get real time job updates on our App
            </p>
            <Link href="https://play.google.com/store/games?device=windows">
              <Image
                src="/playstore_img.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="mt-2 justify-center mx-auto"
              />
            </Link>
          </div>

          {/* QR Code */}
          <div className="sm:w-1/2 flex justify-center">
            <Image
              src="/qr-code.png"
              alt="QR Code"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-10">
        <div className="justify-between  text-center text-xs py-4 text-gray-400">
          &copy; {new Date().getFullYear()} Hijr All rights reserved.
        </div>
        <div className="hover:underline start-end justify-between text-xs py-4 text-gray-400">
          Desing & Develop By:{" "}
          <Link href="https://mokshasolutions.com " className="hover:text-green">Moksha Solutions </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
