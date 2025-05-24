"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import GradientButton from "./GradientButton";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false); // User dismissed it (without storing consent)
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-t border-white/20 p-4 md:p-6 text-sm md:text-base flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white">
        We use cookies to improve your experience. By using our site, you agree
        to our{" "}
        <a
          href="/cookie-policy"
          className="underline hover:text-blue-400 transition-colors"
        >
          Cookie Policy
        </a>
        .
      </p>
      <div className="flex items-center gap-2">
        <GradientButton
          text="Accept"
          onClick={handleAccept}
          className="text-sm px-4 py-2"
        />

        <button
          onClick={handleClose}
          aria-label="Dismiss cookie banner"
          className="text-white hover:text-red-500 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
