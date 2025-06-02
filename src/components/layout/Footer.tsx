"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/homepage/nevaeh-solutions-logo.png";
import { MobileFooter } from "../homepage/mobile/MobileFooter";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Applications", href: "/services#web-apps" },
    { label: "Mobile Apps", href: "/services#mobile-apps" },
    { label: "Landing Pages", href: "/services#landing-pages" },
    { label: "Full Scale Websites", href: "/services#websites" },
  ],
  general: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "FAQ", href: "/faq" },
    { label: "Site Map", href: "/navigation" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <MobileFooter />
      <footer className="mt-10 hidden sm:block">
        <div className="section-spacing">
          <div className="relative py-8">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#103A21] to-white" />
          </div>
          {/* Desktop layout (lg screens) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-10 mb-16 px-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="relative w-44 h-8">
                <Image
                  src={logo}
                  alt="Nevaeh.dev Logo"
                  width={3217}
                  height={246}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-muted-foreground text-base text-white font-thin leading-[20px] tracking-[-4%]">
                Creating exceptional digital experiences with precision and
                expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/nevaehsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nevaehsolutions/?igsh=ZHAycWE1YXc5ZGYy&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/nevaeh-solutions-pty-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.027-3.038-1.852-3.038-1.853 0-2.137 1.447-2.137 2.943v5.664H9.356V9h3.414v1.561h.049c.475-.899 1.637-1.852 3.368-1.852 3.599 0 4.263 2.368 4.263 5.451v6.292zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM6.912 20.452H3.761V9h3.151v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col lg:items-end">
              <div className="text-left space-y-4">
                <h1 className="text-base font-semibold text-white">
                  Quick Links
                </h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start lg:items-end">
              <div className="text-left space-y-4">
                <h1 className="text-base font-semibold text-white">Services</h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.services.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center md:items-start lg:items-end">
              <div className="text-left space-y-4">
                <h1 className="text-base font-semibold text-white">General</h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.general.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Tablet layout (sm to lg screens) */}
          <div className="sm:block lg:hidden mb-16 px-4">
            {/* Company Info (full width) */}
            <div className="space-y-4 mb-10">
              <div className="relative w-44 h-8">
                <Image
                  src={logo}
                  alt="Nevaeh.dev Logo"
                  width={3217}
                  height={246}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-muted-foreground text-base text-white font-thin leading-[20px] tracking-[-4%]">
                Creating exceptional digital experiences with precision and
                expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/nevaehsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nevaehsolutions/?igsh=ZHAycWE1YXc5ZGYy&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/nevaeh-solutions-pty-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#40b16d] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Three columns for links */}
            <div className="grid grid-cols-3 gap-6">
              {/* Quick Links */}
              <div className="space-y-4">
                <h1 className="text-base font-semibold text-white">
                  Quick Links
                </h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h1 className="text-base font-semibold text-white">Services</h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.services.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h1 className="text-base font-semibold text-white">General</h1>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.general.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-[#40b16d] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="relative pt-8">
            <div className="absolute bottom-full left-0 w-full h-[1px] bg-gradient-to-r from-[#103A21] to-white" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Nevaeh Solutions (Pty) Ltd.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
