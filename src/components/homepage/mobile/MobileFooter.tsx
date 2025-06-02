"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/homepage/nevaeh-solutions-logo.png";

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

export const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-4 sm:hidden">
      <div className="relative py-4">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#103A21] to-white" />
      </div>
      <div className="px-6">
        <div>
          <figure className="relative w-44 h-8">
            <Image
              src={logo}
              alt="Nevaeh.dev Logo"
              width={3217}
              height={246}
              className="object-contain"
              priority
            />
          </figure>
        </div>
        <p className="text-white/80 mb-4 text-base font-thin leading-[20px] tracking-[-4%]">
          Creating exceptional digital experiences with precision and expertise.
        </p>
        <nav className="flex space-x-4 mb-12">
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
        </nav>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          <nav>
            <h2 className="text-lg font-medium text-white mb-4">Quick Links</h2>
            <ul className="flex flex-col space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#40b16d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h2 className="text-lg font-medium text-white mb-4">Services</h2>
            <ul className="flex flex-col space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#40b16d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-span-2 mt-8">
            <h2 className="text-lg font-medium text-white mb-4">General</h2>
            <ul className="flex flex-col space-y-3">
              {footerLinks.general.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#40b16d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-[#103A21] to-white my-8"></div>
        <div className="text-center text-sm text-white/70 pb-4">
          <p>© {currentYear} Nevaeh Solutions (Pty) Ltd.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
