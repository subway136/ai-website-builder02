"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold">
              Contact <span className="text-cyan-400">Aura Intelligence</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Have an AI project, automation idea, or business inquiry?
              We'd love to hear from you. Reach out anytime and our team will
              respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              {/* Email */}
              <div className="flex items-center gap-5 mb-8">
                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>

                  <a
                    href="mailto:aiagencybuilder@gmail.com"
                    className="text-lg font-semibold hover:text-cyan-400 transition"
                  >
                    aiagencybuilder@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 mb-8">
                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <Phone className="w-7 h-7 text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>

                  <a
                    href="tel:+447436763956"
                    className="text-lg font-semibold hover:text-cyan-400 transition"
                  >
                    +44 7436 763956
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5">

                <div className="bg-green-500/20 p-4 rounded-xl">
                  <MessageCircle className="w-7 h-7 text-green-500" />
                </div>

                <div>
                  <p className="text-gray-400">WhatsApp</p>

                  <a
                    href="https://wa.me/447436763956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-green-500 hover:text-green-400"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Why Contact Us?
              </h2>

              <div className="space-y-6 text-gray-300 leading-8">

                <p>
                  ✔ AI Chatbot Development
                </p>

                <p>
                  ✔ Business Process Automation
                </p>

                <p>
                  ✔ AI Voice Agents
                </p>

                <p>
                  ✔ Website Development
                </p>

                <p>
                  ✔ SaaS Development
                </p>

                <p>
                  ✔ Custom AI Solutions
                </p>

                <p>
                  We usually respond within 24 hours.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Floating WhatsApp Button */}

      <a
        href="https://wa.me/447436763956"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
