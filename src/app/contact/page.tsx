"use client";

import ContactCard from "@/components/contact/ContactInfoCards";
import GradientButton from "@/components/GradientButton";
import { CheckIcon } from "@/components/Icons";
import { Clock, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen text-white md:flex flex-col items-center">
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
            title="Hours"
            line1="Monday - Friday"
            line2="7:00 AM - 20:00 PM"
          />
        </div>

        {/* Contact Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Contact Form */}
          <div className="border border-[#A6A6A6] p-6 md:p-8 rounded-[1.875rem]">
            <div className="">
              <h2 className="text-xl mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+27 81 279 9063"
                    className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full p-3 bg-transparent border border-white/30 rounded-md resize-none"
                    required
                  />
                </div>

                <GradientButton text="Send Message" />
              </form>
            </div>
          </div>

          {/* Project Info Section */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-xl mb-4">Let&apos;s Discuss Your Project</h2>
              <p className="text-white/80 mb-4">
                Whether you have a clear vision or need help defining your
                project requirements, our team is here to assist you every step
                of the way.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-3">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="mr-2" />
                  <span>Expert consultation on your project requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2" />
                  <span>Detailed project scope and timeline estimates</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2" />
                  <span>Flexible engagement models</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2" />
                  <span>Transparent communication throughout the process</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2" />
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 table-gradient-0 p-8">
              <h3 className="text-lg mb-3">Need immediate assistance?</h3>
              <p className="text-white/80 mb-4">
                If you&apos;re in need of urgent assistance don&apos;t hesitate
                to give us a call!
              </p>
              <GradientButton text="Give us a call" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
