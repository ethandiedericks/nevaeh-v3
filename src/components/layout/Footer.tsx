"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/homepage/nevaeh-solutions-logo.png";
import { MobileFooter } from "../homepage/mobile/MobileFooter";

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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <MobileFooter />
      <footer className="mt-20 mb-8 hidden sm:block">
        <div className="section-spacing">
          {/* Desktop layout (lg screens) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-10 mb-16 px-4">
            {/* Company Info */}
            <div className="space-y-4">
              <Image
                src={logo}
                alt="Nevaeh.dev Logo"
                width={180}
                height={30}
                className="h-8 w-auto"
              />
              <p className="text-muted-foreground text-sm">
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
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col lg:items-end">
              <div className="text-left space-y-4">
                <h3 className="text-base font-semibold text-white">
                  Quick Links
                </h3>
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
                <h3 className="text-base font-semibold text-white">Services</h3>
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
                <h3 className="text-base font-semibold text-white">Legal</h3>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.legal.map((link) => (
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
              <Image
                src={logo}
                alt="Nevaeh.dev Logo"
                width={180}
                height={30}
                className="h-8 w-auto"
              />
              <p className="text-muted-foreground text-sm">
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
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Three columns for links */}
            <div className="grid grid-cols-3 gap-6">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">
                  Quick Links
                </h3>
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
                <h3 className="text-base font-semibold text-white">Services</h3>
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
                <h3 className="text-base font-semibold text-white">Legal</h3>
                <nav className="flex flex-col space-y-2">
                  {footerLinks.legal.map((link) => (
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
            <div className="absolute bottom-full left-0 w-full h-[2px] bg-gradient-to-r from-[#103A21] to-white" />
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
