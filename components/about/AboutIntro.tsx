import React from 'react'
import Image from 'next/image';
import anchor from "@/public/anchor.svg";
import hand from "@/public/hand.svg";
import { cards } from '@/app/data';

export default function AboutIntro() {
  return (
    <div>
              <section className="flex bg-[#F4F5F6] y-16 px-15">
                <div className="grid gap-7">
                  {" "}
                  <h3 className="text-[54px] font-bold ">
                    We are here to <br /> help solve your <br /> problems.{" "}
                  </h3>
                  <p>
                    The argument in favor of using filler text goes something like this:{" "}
                    <br /> If you use real content in the process, anytime you reach.
                  </p>
                  <div className="grid gap-4">
                    <div className="flex gap-3">
                      <Image
                        src={anchor}
                        alt="anchor icon"
                        width={60}
                        className="bg-[#84A17D] p-2 rounded-[4px]"
                      />
                      <div className="">
                        <p className="font-semibold text-[15px]">Project Processing</p>
                        <p>
                          Group discussion first quarter teams viral business <br />{" "}
                          loremipsu adoption cob economy whist.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        src={hand}
                        alt="anchor icon"
                        width={60}
                        className="bg-[#84A17D] p-2 rounded-[4px]"
                      />
                      <div className="">
                        <p className="font-semibold text-[15px]">Financial Solutions</p>
                        <p>
                          Group discussion first quarter teams viral business <br />{" "}
                          loremipsu adoption cob economy whist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-16">
                  {cards.map((card, index) => {
                    return (
                      <div key={index} className="relative">
                        <Image src={card.image} alt="image" width={350} className="rounded-2xl" />
                      </div>
                    );
                  })}
                </div>{" "}
              </section>
        
    </div>
  )
}
