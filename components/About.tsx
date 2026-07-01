import React from "react";
import Image from "next/image";
import { cards, card2, checks } from "@/app/data";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="bg-[#f4f5f6] dark:bg-[#ffffffe5] text-[#000000f4] py-16 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-12">
      
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/2 justify-center">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={card.image}
                width={306}
                height={478}
                className="rounded-xl mb-4 w-full max-w-[306px]"
                alt="card image"
              />

              <Image
                src={card.logo}
                width={306}
                className="w-full max-w-[306px]"
                alt="card logo"
              />
            </div>
          ))}

          {card2.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={card.logo}
                width={270}
                height={40}
                className="mb-4 w-full max-w-[270px]"
                alt="card logo"
              />

              <Image
                src={card.image}
                width={306}
                height={478}
                className="rounded-xl w-full max-w-[306px]"
                alt="card image"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-8 justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            We are the top digital marketer Company
          </h3>

          <p className="text-base leading-relaxed">
            When an unknown printer took a galley of type and scrambled it
            make a type specimen book. When an unknown printer took a galley
            of type and scrambled it type specimen book.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checks.map((check, index) => (
              <div key={index} className="flex gap-3 items-center">
                <Image
                  src={check.image}
                  width={20}
                  alt={check.description}
                />
                <p className="text-sm font-bold">
                  {check.description}
                </p>
              </div>
            ))}
          </div>

          <Link href="/about">
            <button className="bg-[#84a17d] cursor-pointer w-fit rounded-lg py-3 px-6 text-white">
              More About Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}