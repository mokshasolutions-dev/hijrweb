"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);


  return (
    <header className="bg-[#22c55e] text-white font-bold uppercase">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={100}
              height={50}
              className="rounded-xl"
            />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex gap-6 font-poppins tracking-widest items-center text-sm">
          <Link href="/" className="hover:text-[#203c1c]">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#203c1c]">
            About Us
          </Link>
          <Link href="/organization" className="hover:text-[#203c1c]">
            Organization
          </Link>
          <Link href="/aplicants" className="hover:text-[#203c1c]">
            Applicants
          </Link>
          <Link href="/services" className="hover:text-[#203c1c]">
            Services
          </Link>
          <Link href="/contact-us" className="hover:text-[#203c1c]">
            Contact Us
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="https://www.hijr.in/candidate/find-job">
            <button className="hover:bg-white/50 text-white hover:text-green px-3 py-1 rounded-md border-2 border-transparent hover:border-white/60">
              Login
            </button>
          </Link>
          <Link href="https://www.hijr.in/register">
            <button className="hover:bg-white/50 text-white hover:text-green px-3 py-1 rounded-md border-2 border-transparent hover:border-white/60">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#22c55e] px-4 pb-4 space-y-3">
          <Link
            href="/"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            About Us
          </Link>
          <Link
            href="/organization"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            Organization
          </Link>
          <Link
            href="/aplicants"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            Applicants
          </Link>
          <Link
            href="/services"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            className="block hover:text-[#203c1c]"
            onClick={close}
          >
            Contact Us
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <Link href="https://www.hijr.in/candidate/find-job">
              <button className="w-full hover:bg-white/50 text-white hover:text-green px-3 py-1 rounded-md border border-white/40">
                Login
              </button>
            </Link>
            <Link href="https://www.hijr.in/register">
              <button className="w-full hover:bg-white/50 text-white hover:text-green px-3 py-1 rounded-md border border-white/40">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
