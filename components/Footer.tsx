import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background text-sm">
      <div className="px-3">
        <div className="content_wrapper grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={400}
              height={300}
              className="w-36 h-auto"
            />
            <p className="mt-3 text-muted-foreground text-xs">
              Your trusted shopping destination.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-muted-foreground">
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
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <a href="/payment" className="hover:underline">
                  Payment
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Need Support?</h3>
            <p className="text-muted-foreground">
              support@example.com <br />
              +880-1234-567890
            </p>
          </div>
        </div>
      </div>

      {/* Social & Payment */}
      <div className="content_wrapper py-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
        <div className="text-muted-foreground text-sm">
          <p className="uppercase">Payment Accepted</p>
          {/* You can show logos of Visa, MasterCard, etc. */}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-slate-900 py-4 text-muted-foreground text-xs">
        <p>© 2025 Falcon. Designed by xyz</p>
      </div>
    </footer>
  );
}
