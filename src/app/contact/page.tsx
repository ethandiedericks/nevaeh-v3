"use client";

import ContactCard from "@/components/contact/ContactInfoCards";
import GradientButton from "@/components/GradientButton";
import { CheckIcon } from "@/components/Icons";
import { contactInfo } from "@/contactInfo";
import { Clock, Mail, Phone } from "lucide-react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { toast } from "sonner";
import { useRef, useTransition } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await sendContactEmail(formData);
        if (response.success) {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        } else {
          toast.error(response.error || "Failed to send your message.");
        }
      } catch (error) {
        console.error("Error sending contact email:", error);
        toast.error("An unexpected error occurred.");
      }
    });
  };

  return (
    <main className="min-h-screen text-white md:flex flex-col items-center">
      <header className="w-full max-w-6xl px-4 pt-10 flex flex-col items-center mb-8 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-normal md:font-light text-left md:text-center mb-2 md:mb-4 w-full md:max-w-3xl">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p>
          Ready to start your project? Get in touch with us and let&apos;s
          discuss how we can help bring your vision to life.
        </p>
      </header>

      {/* Contact Info Cards */}
      <section
        aria-labelledby="contact-info-heading"
        className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full max-w-6xl px-4"
      >
        <h2 id="contact-info-heading" className="sr-only">
          Contact Information
        </h2>
        <ContactCard
          icon={Phone}
          title="Phone"
          line1="+27 81 279 9063"
          line2="Mon - Sat, 7AM - 8PM SAST"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          line1="ethan@nevaeh.co.za"
          line2="Online support"
        />
        <ContactCard
          icon={Clock}
          title="Hours"
          line1="Monday - Saturday"
          line2="7:00 AM - 20:00 PM"
        />
      </section>

      {/* Contact Section */}
      <section
        aria-labelledby="contact-form-heading"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl px-4 mb-16"
      >
        {/* Contact Form */}
        <article className="border border-[#A6A6A6] p-6 md:p-8 rounded-[1.875rem]">
          <h2 id="contact-form-heading" className="text-xl mb-4">
            Send us a Message
          </h2>
          <form ref={formRef} action={handleSubmit} noValidate>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="fullName" className="block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full p-3 bg-transparent border border-white/30 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
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
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-3 bg-transparent border border-white/30 rounded-md resize-none"
                required
              />
            </div>

            <GradientButton text={isPending ? "Sending..." : "Send Message"} />
          </form>
        </article>

        {/* Project Info */}
        <aside className="flex flex-col space-y-6">
          <div>
            <h2 className="text-xl mb-4">Let&apos;s Discuss Your Project</h2>
            <p className="text-white/80 mb-4">
              Whether you have a clear vision or need help defining your project
              requirements, our team is here to assist you every step of the
              way.
            </p>
          </div>

          <section aria-labelledby="why-contact-heading">
            <h3 id="why-contact-heading" className="text-lg mb-3">
              Why Contact Us?
            </h3>
            <ul className="space-y-3">
              {[
                "Expert consultation on your project requirements",
                "Detailed project scope and timeline estimates",
                "Flexible engagement models",
                "Transparent communication throughout the process",
                "Post-launch support and maintenance",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckIcon className="mr-2 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col top-bottom-gradient-card p-4 justify-center">
            <h3 className="text-lg mb-3 text-left">
              Need immediate assistance?
            </h3>
            <p className="text-white/80 mb-4">
              If you&apos;re in need of urgent assistance, don&apos;t hesitate
              to give us a call!
            </p>
            <a href={`tel:${contactInfo.phone}`} className="max-w-fit">
              <GradientButton text="Give us a call" />
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
