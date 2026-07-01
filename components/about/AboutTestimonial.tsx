import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Team from "@/public/Team4.jpg";
import Image from "next/image";
import vector from "@/public/Vector.svg";
import React from "react";

export default function AboutTestimonial() {
  return (
    <section className="bg-[#153C3C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight text-white max-w-3xl">
            What our clients say about us
          </h3>

          <button className="bg-[#84A17D] hover:bg-[#6f8d68] transition text-white rounded-lg px-6 py-3 w-full sm:w-fit">
            View All Reviews
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div className="flex justify-center">
            <Image
              src={Team}
              alt="Client" width={300}
                    
              className="rounded-2xl max-w-md h-auto"
            />
          </div>

          <div className="space-y-6">
            <Image src={vector} alt="Quote Icon" className="w-10" />

            <p className="text-gray-300 leading-7 text-base">
              He quickly delivered excellent design as per required
              specifications. New landing page will have a refreshing simple
              look while keeping page load light on images and maintaining a
              professional appearance. Finally, it also seems very reasonable to
              implement responsive design, so I'm very happy with that.
            </p>

            <hr className="border-gray-600" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#ECB014"
                      className="text-[#ECB014]"
                    />
                  ))}
                </div>

                <p className="font-semibold text-lg">Marvin McKinney</p>
                <p className="text-sm text-gray-300">Lead Developer</p>
              </div>

              <div className="flex gap-3">
                <button className="h-11 w-11 rounded-full bg-white text-black hover:bg-[#84A17D] hover:text-white flex items-center justify-center transition">
                  <ArrowLeft size={20} />
                </button>

                <button className="h-11 w-11 rounded-full bg-white text-black hover:bg-[#84A17D] hover:text-white flex items-center justify-center transition">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
