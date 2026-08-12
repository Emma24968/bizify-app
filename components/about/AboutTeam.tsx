import { teams } from "@/app/data";
import React from "react";
import Image from "next/image";

export default function AboutTeam() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-center leading-tight text-gray-900 max-w-3xl mx-auto">
          Our team is always here for you
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teams.map((team, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <Image
                src={team.image}
                alt={team.name}
                className="w-full h-auto object-cover"
              />

              <div className="bg-[#E3EBF3] text-center py-4">
                <p className="font-bold text-lg">{team.name}</p>
                <p className="text-gray-600">{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}