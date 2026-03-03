import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

export default function ContactInfo() {
  const formRef = useRef();
  const { hash } = useLocation(); // Listen for #contact-info in the URL
  const [status, setStatus] = useState("idle");

  const [fields, setFields] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});

  // --- SCROLL LOGIC ---
  useEffect(() => {
    if (hash === '#contact-info') {
      const element = document.getElementById('contact-info');
      if (element) {
        // Small timeout ensures the DOM is fully painted before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!fields.full_name.trim()) newErrors.full_name = 'Name is required.';
    
    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!fields.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^(09|\+639|\+632|0[2-9])\d{7,9}$/.test(fields.phone.replace(/[\s\-]/g, ''))) {
      newErrors.phone = 'Enter a valid PH number (e.g. 09XX XXX XXXX).';
    }

    if (!fields.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstKey = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm("service_kney65d", "template_zte5i96", formRef.current, "0MzGZwWBlw4Dfb0vB")
      .then(
        () => { 
          setStatus("success"); 
          formRef.current.reset(); 
          setFields({ full_name: '', email: '', phone: '', company: '', message: '' }); 
        },
        () => { setStatus("error"); }
      );
  };

  const inputClass = (name) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
      errors[name]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-teal-600 focus:border-teal-600'
    }`;

  const infoCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Head Office',
      lines: ['Suite 302 Eleongsing Bldg,', '440 Rizal Ave Ext,', 'East Grace Park, Caloocan City'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Phone',
      lines: ['0917 638 1250', '(+632) 8364 0165'],
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
  ];

  return (
    <section id="contact-info" className="bg-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-2">Contact Information</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-3">
            Start with a Free Consultation
          </h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
            No obligation, no runaround. Whether you're looking to hire security for your business,
            need personal protection, or just want to know your options — we're happy to talk it through.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: info cards + map */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div key={card.title} className="flex gap-3 border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{card.title}</p>
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 text-xs leading-relaxed break-words">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 w-full">
              <iframe
                title="LISAI Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.032233800669!2d120.985551375848!3d14.654116475753018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5e407333333%3A0x7777777777777777!2sRizal%20Ave%20Ext%2C%20Caloocan!5e0!3m2!1sen!2sph!4v1700000000000"
                className="w-full h-52 sm:h-64 block"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm bg-white">
            <p className="text-sm text-gray-500 mb-1">Send Us a Message</p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              We'll Get Back to You Shortly
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Inquire here by filling up the details below.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="full_name"
                  value={fields.full_name}
                  onChange={handleChange}
                  placeholder="Juan Dela Cruz"
                  className={inputClass('full_name')}
                />
                <FieldError message={errors.full_name} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  className={inputClass('email')}
                />
                <FieldError message={errors.email} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone / Telephone <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="09XX XXX XXXX"
                  className={inputClass('phone')}
                />
                <FieldError message={errors.phone} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company <span className="text-gray-300 text-xs font-normal">(optional)</span>
                </label>
                <input
                  name="company"
                  value={fields.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={inputClass('company')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your security needs..."
                  className={`${inputClass('message')} resize-none`}
                />
                <FieldError message={errors.message} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition ${
                  status === "sending" ? "bg-teal-500 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-800"
                } text-white`}
              >
                {status === "sending" ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>

            {status === "success" && (
              <div className="mt-5 p-4 rounded-lg bg-green-50 text-green-700 text-sm">
                 Your message has been successfully sent. A representative from LISAI will contact you.
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
                 Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}