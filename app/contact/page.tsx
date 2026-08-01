    {/* Email */}
<div className="flex items-center gap-4">
  <Mail className="w-6 h-6 text-primary" />
  <a
    href="mailto:aiagencybuilder@gmail.com"
    className="text-lg font-semibold hover:text-primary transition"
  >
    aiagencybuilder@gmail.com
  </a>
</div>

{/* Phone */}
<div className="flex items-center gap-4 mt-6">
  <Phone className="w-6 h-6 text-primary" />
  <a
    href="tel:+447436763956"
    className="text-lg font-semibold hover:text-primary transition"
  >
    +44 7436 763956
  </a>
</div>

{/* WhatsApp */}
<div className="flex items-center gap-4 mt-6">
  <MessageCircle className="w-6 h-6 text-green-500" />
  <a
    href="https://wa.me/447436763956"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-semibold text-green-500 hover:text-green-400 transition"
  >
    Chat on WhatsApp
  </a>
</div>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/447436763956"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
>
  <MessageCircle className="w-7 h-7" />
</a>             
