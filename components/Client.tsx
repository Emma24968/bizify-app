import React from "react";
import Image from "next/image";
import { clients } from "@/app/data";

export default function Client() {
  return (
    <section className="text-center text-black py-10 md:py-16">
      <h3 className="mb-10 md:mb-16 text-2xl md:text-4xl font-bold">
        We’ve worked on over 150 projects
        <br />
        with 100+ clients
      </h3>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
        {clients.map((client, index) => (
          <div key={index}>
            <Image
              src={client}
              alt="client"
              className="w-24 sm:w-32 md:w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}