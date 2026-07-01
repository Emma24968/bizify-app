import { Mail, MapPin } from "lucide-react";
import React from "react";

export default function AboutContact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight">
              Make something awesome.
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Each demo built with Teba will look different. You can customize
              almost everything in the appearance of your website with only a
              few clicks. Each demo built with Teba will look different.
            </p>

            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-600">
                    KDA Shiromoni I/A, Shiromoni,
                    <br />
                    Khulna, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Contact</h4>
                  <p className="text-gray-600">
                    bizify@example.com
                    <br />
                    123-345-3456
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-2" />

            <p className="font-medium">
              Office Hours: Mon – Sat: 8:00 AM – 10:00 PM
            </p>
          </div>

          <div className="bg-[#F4F5F6] rounded-2xl p-6 sm:p-8">
            <h2 className="text-[24px] sm:text-center font-bold text-gray-900">
              Fill The Contact Form
            </h2>

            <p className="text-gray-500 sm:text-center mt-2 mb-8">
              Feel free to contact with us, we don't spam your email.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#84A17D]"
                />

                <input
                  type="text"
                  placeholder="Phone number"
                  className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#84A17D]"
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#84A17D]"
              />

              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full bg-transparent border-b border-gray-300 py-2 resize-none focus:outline-none focus:border-[#84A17D]"
              />

              <button
                type="submit"
                className="w-full bg-[#84A17D] hover:bg-[#6f8d68] transition text-white py-4 rounded-lg font-medium"
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
