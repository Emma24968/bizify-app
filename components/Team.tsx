import { Instagram, Linkedin, TwitterIcon } from "lucide-react";
import { teams } from "@/app/data";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div>
<section className="justify-items-center text-black px-4 pb-8 lg:pb-16"><h3 className="text-[20px] md:text-[25px] lg:text-5xl font-bold text-center px-4 py-8 md:py-12 lg:py-15">          Our team is always here for you
        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">          {teams.map((team, index) => {
            return (
              <div key={index} className="rounded-lg group relative max-w-[250px]">
                <div className="absolute ml-4 mt-5 text-[#191818]   opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-3">
                  <a href="#">
                    {" "}
                    <Linkedin />
                  </a>
                  <a href="#">
                    <Instagram />
                  </a>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </div>
                <Image
                  src={team.image}
                  alt={team.name}
                  className="rounded-t-xl h-auto w-full "
               />
                <div className="text-center rounded-b-xl bg-[#e3ebf3d4] pb-1">
                  <p className=" text-[15px] font-bold">{team.name}</p>
                  <p>{team.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
