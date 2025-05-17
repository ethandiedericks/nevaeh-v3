"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/homepage/nevaeh-solutions-logo.png";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Applications", href: "/services#web-apps" },
    { label: "Mobile Apps", href: "/services#mobile-apps" },
    { label: "Landing Pages", href: "/services#landing-pages" },
    { label: "Full Scale Websites", href: "/services#websites" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-8 sm:hidden">
      <div className="px-6">
        {/* Logo */}
        <div className="mb-3">
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
        </div>

        {/* Tagline */}
        <p className=" text-white/80 mb-8 text-base font-thin leading-[20px] tracking-[-4%]">
          Creating exceptional digital experiences with precision and expertise.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-12">
          <a
            href="https://www.facebook.com/nevaehsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#40b16d] transition-colors"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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

        {/* Two-column layout for links */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          {/* Quick Links */}
          <div>
            <h1 className="text-lg font-medium text-white mb-4">Quick Links</h1>
            <nav className="flex flex-col space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#40b16d] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h1 className="text-lg font-medium text-white mb-4">Services</h1>
            <nav className="flex flex-col space-y-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#40b16d] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="col-span-2 mt-8">
            <h1 className="text-lg font-medium text-white mb-4">Legal</h1>
            <nav className="flex flex-col space-y-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#40b16d] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/70 pb-4">
          © {currentYear} Nevaeh Solutions (Pty) Ltd.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};
