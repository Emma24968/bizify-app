import React from "react";
import Image from "next/image";
import anchor from "@/public/anchor.svg";
import hand from "@/public/hand.svg";
import { cards } from "@/app/data";

export default function AboutIntro() {
  return (
    <section className="bg-[#F4F5F6] py-16 px-4 sm:px-6 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight text-gray-900 tracking-tight">
              We are here to help solve your problems.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              The argument in favor of using filler text goes something like
              this: If you use real content in the process, anytime you reach.
            </p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={anchor}
                    alt="anchor icon"
                    width={44}
                    height={44}
                    className="bg-[#84A17D] p-2 rounded-[8px] w-11 h-11 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-base text-gray-900">
                    Project Processing
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Group discussion first quarter teams viral business
                    loremipsu adoption cob economy whist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={hand}
                    alt="hand icon"
                    width={44}
                    height={44}
                    className="bg-[#84A17D] p-2 rounded-[8px] w-11 h-11 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-base text-gray-900">
                    Financial Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Group discussion first quarter teams viral business
                    loremipsu adoption cob economy whist.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full">
            {cards.slice(0, 1).map((card, index) => {
              return (
                <div key={index} className="relative w-full max-w-[586px]">
                  <div className="absolute top-8 left-8 -right-4 -bottom-4 bg-white rounded-2xl opacity-40 -z-10 hidden sm:block" />
                  <Image
                    src={card.image}
                    alt="About"
                    width={350}
                    height={450}
                    className="rounded-2xl w-full max-w-[350px] h-auto object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
