import React from "react";

const CookiePolicyPage = () => {
  return (
    <div className="section-spacing space-y-12 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl leading-[100%] tracking-[-4%]">
          Cookie Policy
        </h1>
        <p className="text-sm text-white/70 mt-2">Last updated: May 24, 2025</p>
      </div>

      <div className="prose prose-invert prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-blue-500 max-w-none">
        <p>
          This Cookie Policy explains how NEVAEH SOLUTIONS (PTY) LTD ({"we"},
          {"us"}, and {"our"}) uses cookies and similar tracking technologies
          when you visit our website{" "}
          <a href="https://nevaeh.co.za">https://nevaeh.co.za</a>.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by websites you
          visit. They are widely used to make websites work more efficiently and
          to provide reporting information.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the website to function and cannot be switched off in our systems.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These enable the website to
            provide enhanced functionality and personalization.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These help us understand how
            visitors interact with our website by collecting and reporting
            information anonymously.
          </li>
        </ul>

        <h2>Why We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Enable essential functions of the website.</li>
          <li>
            Remember user preferences and choices (e.g., contact form inputs).
          </li>
          <li>Improve site performance and analyze traffic.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings.
          Please note that disabling cookies may affect the functionality of the
          website.
        </p>

        <h2>Your Consent</h2>
        <p>
          By continuing to use our website, you agree to the use of cookies as
          described in this Cookie Policy. A cookie banner is displayed on your
          first visit for you to provide explicit consent.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us
          at <a href="mailto:info@nevaeh.co.za">info@nevaeh.co.za</a>.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
