import React from "react";
import PageHeader from "../PageHeader";
import { Testimonials } from "../data";
import { Star } from "lucide-react";
import Image from "next/image";
import quote from "@/public/Icon.svg";

export default function Testimonial() {
  return (
    <div>
      <PageHeader title="Home" currentPage="Testimonial" />

      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F4F5F6] p-6 rounded-xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      fill="#ECB014"
                      className="text-[#ECB014] w-4 h-4"
                    />
                  ))}
                </div>

                <p className="text-[#3F4E50] leading-relaxed text-sm">
                  {testimonial.text}
                </p>

                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      width={50}
                      height={50}
                      className="rounded object-cover"
                      alt={testimonial.name}
                    />

                    <div>
                      <p className="font-semibold text-[15px] ">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#3F4E50]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  <Image
                    src={quote}
                    alt="quote icon"
                    className="rotate-180 w-8 h-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}