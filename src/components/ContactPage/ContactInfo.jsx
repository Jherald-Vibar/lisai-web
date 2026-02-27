import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactInfo() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5tzziw",
        "template_9b0ekwt",
        formRef.current,
        "PjuCjthlPhvNW1EMA"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");

        }
      );
  };

  const infoCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Head Office',
      lines: ['Suite 302 Blessingking Bldg,', '440 Rizal Ave Ext, Bet. 9th & 10th Ave,', 'East Grace Park, Caloocan, Metro Manila'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Phone',
      lines: ['0917-6381250', '(+632) 83040195', '(+632) 73667875'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: 'Email',
      lines: ['alibertylnvestigation_inc@yahoo.com', 'libertyinvestigation_inc@yahoo.com'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Office Hours',
      lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 5:00 PM', 'Sunday & Holidays: Closed'],
    },
  ]

  const topics = [
    'Select a Topic',
    'Security Guard Services',
    'Personal Protection',
    'Event Security',
    'Training Programs',
    'General Inquiry',
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 mb-2">Contact Information</p>
          <h2 className="text-3xl font-bold text-teal-700 mb-3">
            Start with a Free Consultation
          </h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
            No obligation, no runaround. Whether you're looking to hire security for your business,
            need personal protection, or just want to know your options — we're happy to talk it through.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {infoCards.map((card) => (
              <div
                key={card.title}
                className="flex gap-4 border border-gray-200 rounded-xl p-5"
              >
                <div className="w-11 h-11 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {card.title}
                  </p>
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-gray-500 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="LISAI Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4!2d120.9833!3d14.6566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b40e2f123456%3A0xabcdef!2s440+Rizal+Ave+Ext%2C+East+Grace+Park%2C+Caloocan+City!5e0!3m2!1sen!2sph!4v1"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </div>


          {/* RIGHT SIDE - FORM CARD */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white">

            <p className="text-sm text-gray-500 mb-1">Send Us a Message</p>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              We'll Get Back to You Shortly
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Inquire here by filling up the details below.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="full_name"
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="juan@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
                />
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topic / Service
                </label>
                <select
                  name="topic"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
                >
                  <option value="">Select a Service</option>
                  {topics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company / Organization
                </label>
                <input
                  name="company"
                  required
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your security needs..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition
                ${status === "sending"
                    ? "bg-teal-500 cursor-not-allowed"
                    : "bg-teal-700 hover:bg-teal-800"}
                text-white`}
              >
                {status === "sending" ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>

            {/* Success / Error */}
            {status === "success" && (
              <div className="mt-6 p-4 rounded-lg bg-green-50 text-green-700 text-sm">
                ✅ Your message has been successfully sent.
                A representative from Liberty Investigation and Security Agency Inc. (LISAI)
                will contact you.
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
