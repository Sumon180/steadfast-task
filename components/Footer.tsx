import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background text-sm">
      <div className="px-3">
        <div className="content_wrapper flex flex-wrap gap-20 py-10">
          {/* Logo */}
          <div className="w-80">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={400}
              height={300}
              className="w-36 h-auto"
            />
            <p className="mt-3 max-w-60 text-slate-300 text-xs">
              Experience our new platform & Enjoy exiting deals and offers on
              your day to day
            </p>
            <div className="max-w-60 mt-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 min-w-6 h-6 rounded-full bg-white text-slate-800 flex items-center justify-center">
                  <IoLocationSharp size={16} />
                </span>
                <p className="text-slate-300">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 min-w-6 h-6 rounded-full bg-white text-slate-800 flex items-center justify-center">
                  <MdLocalPhone size={16} />
                </span>
                <p className="text-slate-300">01729-1497201</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-6 min-w-6 h-6 rounded-full bg-white text-slate-800 flex items-center justify-center">
                  <MdEmail size={16} />
                </span>
                <p className="text-slate-300">falcon@gmail.com</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="w-64">
            <h3 className="font-semibold uppercase text-muted-foreground mb-2">
              About
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-80 md:w-64 md:ml-12">
            <h3 className="font-semibold uppercase text-muted-foreground mb-2">
              Help
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>
                <a href="/payment" className="hover:underline">
                  Payment
                </a>
              </li>
              <li>
                <a href="/payment" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/payment" className="hover:underline">
                  My Orders
                </a>
              </li>

              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/payment" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="/payment" className="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="">
            <h3 className="font-semibold uppercase text-muted-foreground mb-2">
              Need Support?
            </h3>
            <div className="border w-fit flex items-center px-2 py-1">
              <Image
                src={"/icons/customer-support.svg"}
                alt={"image"}
                width={400}
                height={200}
                className="w-7"
              />
              10724-7814XX
            </div>
            <h3 className="font-semibold text-muted-foreground mt-5 mb-1 uppercase">
              Download App
            </h3>
            <div className="space-y-3">
              <Image
                src={"/images/Google.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-36"
              />
              <Image
                src={"/images/apple.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-36"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social & Payment */}
      <div className="content_wrapper py-4 px-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-medium">Follow us on</span>
          <a href="#" className="hover:text-primary">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-primary">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-primary">
            <FaTwitter />
          </a>
        </div>
        <div className="text-slate-300 text-sm flex flex-col md:flex-row items-center gap-3">
          <p className="uppercase">Payment Accepted</p>
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-white p-2 rounded-md">
              <Image
                src={"/images/Visa.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-12"
              />
            </button>
            <button className="bg-white px-3 py-1.5 rounded-md">
              <Image
                src={"/images/Mastercard.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-8"
              />
            </button>
            <button className="bg-sky-600 p-2 rounded-md">
              <Image
                src={"/images/Vector.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-12"
              />
            </button>
            <button className="bg-white px-2 rounded-md">
              <Image
                src={"/images/image-22.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-[38px]"
              />
            </button>
            <button className="bg-white px-3 py-1.5 rounded-md">
              <Image
                src={"/images/Nagad-Logo.wine-1.png"}
                alt={"image"}
                width={400}
                height={200}
                className="w-10"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-slate-900 py-4 text-slate-300 text-xs">
        <p>© {new Date().getFullYear()} Falcon. Designed by xyz</p>
      </div>
    </footer>
  );
}
