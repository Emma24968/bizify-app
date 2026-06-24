import React from "react";
import Image from "next/image";
import icon from "@/public/Icon.png";
import { ArrowRight } from "lucide-react";
import audit from "@/public/audit.jpg";
import { services } from "@/app/data";
export default function Service() {
  return (
    <div>
      {" "}
      <section className="py-12 px-4 md:px-8 lg:px-16 ">
        <div>
          <div className="grid lg:grid-cols-3">
            <div className=" justify-center lg:text-start text-center lg:mr-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
                Amazing solutions for business
              </h3>
              <p className="text-[18px] lg:text-2xl ">
                With over 25 years of experience, we have crafted thousands of{" "}
                Strategic discovery process that enables us peelback thousands
                which enable us to understand.
              </p>
            </div>
            <div className="grid mt-10 w-full max-w-[306px] min-h-[382px] hover:shadow-2xl transition bg-[#f4f5f6] p-6 rounded-2xl">
              <Image src={icon} alt="icon" />
              <h3 className="text-2xl font-bold">Marketing Strategy</h3>
              <p className="text-[15px] ">
                when an unknown printer took gerty galley types awec erambled
                when an unknown printea wr took galley Insurance ollowing.
              </p>
              <hr className="text-[#bdb2b2c2]" />
              <div className="flex items-center ">
                <button className="text-[#84a17d]">Learn more</button>
                <ArrowRight className="text-[#84a17d] " />
              </div>
            </div>
            <div className="grid mt-10 w-full max-w-[306px] min-h-[382px] hover:shadow-2xl transition bg-[#f4f5f6] p-6 rounded-2xl">
              <Image src={icon} alt="icon" />
              <h3 className="text-2xl font-bold">Assurance Strategy</h3>
              <p className="text-[15px] ">
                when an unknown printer took gerty galley types awec erambled
                when an unknown printea wr took galley Insurance ollowing.
              </p>
              <hr className="text-[#bdb2b2c2]" />
              <div className="flex items-center ">
                <button className="text-[#84a17d]">Learn more</button>
                <ArrowRight className="text-[#84a17d] " />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className=" mt-10 w-full lg:grid-cols-1 max-w-[306px] min-h-[382px] gap-4 hover:shadow-2xl transition mt-10 bg-[#f4f5f6] p-3 rounded-2xl"
              >
                <Image
                  src={service.image}
                  alt="image"
                  width={250}
                  className="rounded-xl"
                />
                <h3>{service.title}</h3>
                <hr className="text-[#bdb2b2c2] " />
                <div className="flex">
                  <button className="text-[#84a17d] cursor-pointer">
                    Learn more
                  </button>
                  <ArrowRight className="text-[#84a17d]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
