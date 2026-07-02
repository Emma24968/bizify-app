import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/app/data";
import { serviceList } from "@/app/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCards.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-[#F4F5F6] p-6 rounded-2xl hover:shadow-2xl transition duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={70}
              height={70}
              className="bg-[#84A17D] p-2 rounded-md"
            />

            <h3 className="text-xl font-semibold">{service.title}</h3>

            <p className="text-gray-600 leading-7 flex-grow">
              {service.description}
            </p>

            <Link
              href={`/services/${service.id.toLowerCase()}`}
              className="inline-flex items-center gap-2 text-[#84A17D] hover:text-black transition-colors"
            >
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
