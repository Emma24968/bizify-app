export default function ContactForm() {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-[#1B2A59]">
        Fill The Contact Form
      </h2>

      <p className="text-gray-500 text-sm mt-2 mb-8">
        Feel free to contact with us, we don’t spam your email
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Your name"
          className="bg-transparent border-b border-gray-300 outline-none pb-3 text-sm placeholder:text-gray-400"
        />

        <input
          type="tel"
          placeholder="Phone number"
          className="bg-transparent border-b border-gray-300 outline-none pb-3 text-sm placeholder:text-gray-400"
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-transparent border-b border-gray-300 outline-none pb-3 text-sm placeholder:text-gray-400"
        />
      </div>

      <div className="mb-8">
        <textarea
          rows={4}
          placeholder="Write your message"
          className="w-full bg-transparent border-b border-gray-300 outline-none resize-none text-sm placeholder:text-gray-400"
        />
      </div>

      <button className="w-full bg-[#89A67D] hover:opacity-90 transition text-white py-4 rounded-md font-medium">
        Send Message
      </button>
    </div>
  );
}
