import { Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Detail() {
  return (
    <div className="max-w-xl space-y-8">
      <div className="space-y-4">
        <h3 className="text-4xl font-bold text-[#172426] leading-tight">
          Make something awesome.
        </h3>

        <p className="text-gray-600 leading-7">
          Each demo built with Teba will look different. You can customize
          almost anything in the appearance of your website with only a few
          clicks. Create a beautiful experience that reflects your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
          <div className="bg-[#172426] text-white p-3 rounded-xl w-fit mb-4">
            <MapPin size={22} />
          </div>

          <p className="text-sm text-gray-500 mb-1">Address</p>

          <p className="font-medium text-gray-800 leading-7">
            KDA Shiromoni I/A, Shiromoni,
            <br />
            Khulna, Bangladesh
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
          <div className="bg-[#172426] text-white p-3 rounded-xl w-fit mb-4">
            <Mail size={22} />
          </div>

          <p className="text-sm text-gray-500 mb-1">Contact</p>

          <div className="space-y-2">
            <Link
              href="mailto:bizify@example.com"
              className="block font-medium text-[#172426] hover:underline"
            >
              bizify@example.com
            </Link>

            <p className="text-gray-700">+234 518-234-4567</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-5 flex items-center gap-3">
        <div className="bg-gray-100 p-3 rounded-xl">
          <Clock className="text-[#172426]" size={20} />
        </div>

        <div>
          <p className="font-semibold text-[#172426]">Office Hours</p>
          <p className="text-gray-600">Mon – Sat: 8:00 AM – 10:00 PM</p>
        </div>
      </div>
    </div>
  );
}
