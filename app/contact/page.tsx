importimport { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Let's Build the{" "}
              <span className="text-primary">Future Together.</span>
            </h1>

            <p className="text-lg text-white/60 mb-12 max-w-xl">
              Whether you need AI Automation, Voice Agents, Workflow Systems,
              or Custom AI Solutions, our engineering team is ready to help.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-5 glass-panel rounded-2xl p-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Email Us
                  </p>

                  <a
                    href="mailto:aiagencybuilder@gmail.com"
                    className="font-bold text-lg hover:text-primary transition"
                  >
                    aiagencybuilder@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 glass-panel rounded-2xl p-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Call Us
                  </p>

                  <a
                    href="tel:+447436763956"
                    className="font-bold text-lg hover:text-primary transition"
                  >
                    +44 7436 763956
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 glass-panel rounded-2xl p-5">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <MessageCircle className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-white/50">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/447436763956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg hover:text-green-500 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>

            {/* Calendly */}
            <div className="mt-12 glass-panel rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-5">
                <Calendar className="text-primary" />
                <h3 className="text-2xl font-bold">
                  Book a Discovery Call
                </h3>
              </div>

              <div className="aspect-video rounded-2xl border border-dashed border-white/20 flex items-center justify-center bg-white/5">
                <p className="text-white/40">
                  Calendly Widget Here
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="glass-panel rounded-3xl p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Service Required
                </label>

                <select className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-primary outline-none">

                  <option>AI Voice Agent</option>

                  <option>Workflow Automation</option>

                  <option>AI Chatbot</option>

                  <option>Custom AI Solution</option>

                </select>

              </div>

              <div>

                <label className="block mb-2 text-sm">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-primary outline-none"
                />

              </div>

              <button
                type="submit"
                className="w-full rounded-xl py-4 bg-primary text-black font-bold hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
      }
