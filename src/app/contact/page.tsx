import ContactCard from "@/components/contact/ContactInfoCards";
import { Clock, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className=" min-h-screen text-white md:flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 pt-10 flex flex-col items-center mb-8 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-normal md:font-light text-left md:text-center mb-2 md:mb-4 w-full md:max-w-3xl">
          Let&apos;s Build Something Amazing Together
        </h1>
        <p>
          Ready to start your project? Get in touch with us and let&apos;s
          discuss how we can help bring your vision to life.
        </p>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full mt-8">
          <ContactCard
            icon={Phone}
            title="Phone"
            line1="+27 81 279 9063"
            line2="Mon - Fri, 9AM - 6PM EST"
          />

          <ContactCard
            icon={Mail}
            title="Email"
            line1="info@nevaeh.co.za"
            line2="Online support"
          />

          <ContactCard
            icon={Clock}
            title="Working Hours"
            line1="Monday - Friday"
            line2="7:00 AM - 20:00 PM"
          />
        </div>
        {/* form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

        </div>
      </div>
    </div>
  );
};

export default Contact;
