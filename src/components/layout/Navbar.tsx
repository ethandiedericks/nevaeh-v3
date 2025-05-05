"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/homepage/nevaeh-solutions-logo.png";
import GradientButton from "../GradientButton";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Handle clicks outside of mobile nav
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Handlers for menu
  const handleMenuOpen = () => setMobileMenuOpen(true);
  const handleMenuClose = () => setMobileMenuOpen(false);

  return (
    <header
      ref={navRef}
      className="sticky top-0 right-0 left-0 z-50 w-full  bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/60"
    >
      <div className="container max-w-6xl mx-auto flex py-4 px-4 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/" className="relative z-50">
            <Image
              src={logo}
              alt="Nevaeh Solutions Logo"
              width={180}
              height={40}
              className="h-4 sm:h-5 2xl:h-6 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Links and Contact button on the right for desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm 2xl:text-base font-medium transition-colors hover:text-gray-300 relative
                  ${
                    pathname === item.href
                      ? 'text-white after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#103A21] after:to-white'
                      : "text-gray-300"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <GradientButton text="Contact" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={mobileMenuOpen ? handleMenuClose : handleMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col text-center space-y-3 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors p-2 rounded-md
                  ${
                    pathname === item.href ? "text-green-500" : "text-gray-300"
                  }`}
                onClick={handleMenuClose}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={handleMenuClose}>
                <GradientButton text="Contact" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
