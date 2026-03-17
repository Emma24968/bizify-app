import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import Team from "@/public/Team4.jpg";
import Image from 'next/image';
import vector from "@/public/Vector.svg";
import React from 'react'

export default function AboutTestimonial() {
  return (
    <div>
              <section className="py-16 px-16 bg-[#153C3C]">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-[54px] font-bold">
            What our clients
            <br /> say about us
          </h3>

          <button className="bg-[#84a17d] text-[15px] w-[12rem] rounded-lg py-3 px-2 text-white">
            View All Reviews
          </button>
        </div>
        <div className="flex justify-between text-white">
          <Image
            src={Team}
            alt="image"
            className="text-white w-[350px]  rounded-2xl "
          />
          <div className="grid my-4">
            <Image src={vector} alt="vector icon" />
            <p>
              “He quickly delivered excellent design as per required <br />
              specifications. New landing page will have refreshing <br />{" "}
              simple look, while keeping page load light on images and <br /> at
              the same time keeping professional look. Finally, it also <br />{" "}
              seems very reasonable to implement responsive design,
              <br /> so I'm very happy with that.”
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      fill="#ECB014"
                      className="text-[#ECB014]"
                    />
                  ))}
                </div>

                <p className="font-semibold">Marvin McKinney</p>
                <p className="text-sm text-[#F4F5F6]">Lead Developer</p>
              </div>
              <div className="flex gap-1.5">
                <div className=" right-5 top-1/2 h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-[#84A17D] rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowLeft />
                </div>
                <div className=" right-5 top-1/2  h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-[#84A17D] rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
