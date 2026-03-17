import { Mail, MapPin } from 'lucide-react'
import React from 'react'

export default function AboutContact() {
  return (
    <div>
              <section className="px-16 py-20 dark:bg-white dark:text-black flex gap-20">
        <div className="grid">
          <h3 className="text-[54px] font-bold">
            Make something <br /> awesome.
          </h3>
          <p>
            Each demo built with Teba will look different. You can customize
            almost <br /> in the appearance of your website with only a few
            clicks. Each <br /> demo built with Teba will look different.
          </p>
          <div className="flex justify-between">
            <div>
              <div className="h-[48px] w-[48px] bg-black flex items-center justify-center rounded-[6px]">
                <MapPin color="#ffffff" className="w-[24p]" />
              </div>
              <p>Address</p>
              <p>
                KDA Shiromoni I/A, Shiromoni,
                <br /> Khulna, Bangladesh
              </p>
            </div>
            <div>
              <div className="h-[48px] w-[48px] bg-black flex items-center justify-center rounded-[6px]">
                <Mail color="#ffffff" className="w-[24p]" />
              </div>
              <p>Contact</p>
              <p>
                bizify@example.com <br />
                123-345-3456
              </p>
            </div>
          </div>
            <hr className="my-4"/>
            <p>Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
        </div>

        <div className="w-[35rem] mx-auto bg-[#f4f5f6] p-[26px] rounded-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Fill The Contact Form
          </h2>

          <p className="text-gray-500 mb-10">
            Feel free to contact with us, we don't spam your email
          </p>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
              />

              <input
                type="text"
                placeholder="Phone number"
                className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
            />

            <textarea
              placeholder="Write your message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#84A17D] cursor-pointer hover:bg-[#84A17D] text-white py-4 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
