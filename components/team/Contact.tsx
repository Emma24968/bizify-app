"use client";

export default function ContactForm() {
  return (
    <section className="bg-[#fff] py-16 flex justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Message With Me
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="rounded w-full bg-[#F4F5F6] text-sm px-4 py-3 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="rounded w-full bg-[#F4F5F6] text-sm px-4 py-3 outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number*"
            className="rounded w-full bg-[#F4F5F6] text-sm px-4 py-3 outline-none"
          />

          <textarea
            placeholder="Message Here*"
            rows={4}
            className="rounded w-full bg-[#F4F5F6] text-sm px-4 py-3 outline-none resize-none"
          />

          <button
            type="submit"
            className="rounded bg-[#84A17D] text-white text-sm px-6 py-4 mt-2 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
